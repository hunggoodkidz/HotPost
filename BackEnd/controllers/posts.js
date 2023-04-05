import Post from '../models/Post.js'
import User from '../models/User.js'

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body
    const user = await User.findById(userId)
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    })
    await newPost.save()

    const post = await Post.find()
    res.status(201).json(post)
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find()
    res.status(200).json(post)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params
    const post = await Post.find({ userId })
    res.status(200).json(post)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.body
    const post = await Post.findById(id)
    const isLiked = post.likes.get(userId)

    if (isLiked) {
      post.likes.delete(userId)
    } else {
      post.likes.set(userId, true)
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    )

    res.status(200).json(updatedPost)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const commentPost = async (req, res) => {
  try {
    const { id } = req.params
    const { userId, comment } = req.body
    const post = await Post.findById(id)
    const user = await User.findById(userId)

    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    const newComment = {
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      userPicturePath: user.picturePath,
      comment,
      createdAt: new Date().toISOString(),
    }

    post.comments.push(newComment)
    await post.save()

    res.status(201).json(post)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

/* DELETE */

export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params
    const post = await Post.findById(id)

    if (!post) {
      res.status(404).json({ message: 'Post not found' })
      return
    }

    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    )

    if (commentIndex === -1) {
      res.status(404).json({ message: 'Comment not found' })
      return
    }

    post.comments.splice(commentIndex, 1)
    await post.save()

    res.status(200).json(post)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)

    if (!post) {
      res.status(404).json({ message: 'Post not found' })
      return
    }

    await Post.findByIdAndRemove(id)

    res.status(200).json({ message: 'Post deleted successfully' })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
