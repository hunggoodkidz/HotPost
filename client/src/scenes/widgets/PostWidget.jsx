import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  RemoveOutlined
} from '@mui/icons-material'
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
  Button,
  TextField,
} from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import Friend from 'components/Friend'
import WidgetWrapper from 'components/WidgetWrapper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from 'state'

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false)
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const loggedInUserId = useSelector((state) => state.user._id)
  const isLiked = Boolean(likes[loggedInUserId])
  const likeCount = Object.keys(likes).length
  const [comment, setComment] = useState('')

  const { palette } = useTheme()
  const main = palette.neutral.main
  const primary = palette.primary.main
  
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const deletedPost = await response.json()
    dispatch(setPost({ post: deletedPost }))
  }

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    })
    const updatedPost = await response.json()
    dispatch(setPost({ post: updatedPost }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/comment`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: loggedInUserId, comment }),
      }
    )
    const updatedPost = await response.json()
    dispatch(setPost({ post: updatedPost }))
    setComment('')
    const deletedPost = await response.json()
    dispatch(setPost({ post: deletedPost }))
    window.location.reload();


  }
  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: '1rem' }}>
        <span>{description}</span>
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton onClick={handleDelete}>
        <RemoveOutlined />
      </IconButton>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => {
            const { firstname, lastname, userPicturePath } = comment
            return (
              <Box key={`${name}-${i}`}>
                <Divider />
             
                  <Typography sx={{ color: 'red', m: '0.5rem 0', pl: '1rem' }}>
                    <Friend
                      userPicturePath={userPicturePath}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    ></Friend>
                    <p>{`${comment.firstName} ${comment.lastName}`}</p>
                  </Typography>
                  <Typography sx={{ color: main, m: '0.5rem 0', pl: '1rem',display:'flex' }}>
                    {console.log(comment)}
                    Bình Luận: {comment.comment}
                  </Typography>
    
              </Box>
            )
          })}

          <Divider />
          <form onSubmit={handleSubmit}>
            <TextField
              label="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <Button type="submit" variant="contained" color="primary">
              Comment
            </Button>
          </form>
        </Box>
      )}
    </WidgetWrapper>
  )
}

export default PostWidget
