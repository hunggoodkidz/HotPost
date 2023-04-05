import express from "express";
import {
  commentPost,
  getFeedPosts,
  getUserPosts,
  likePost,
  deleteComment,
  deletePost
} from '../controllers/posts.js'
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, commentPost);

<<<<<<< Updated upstream
=======
/* DELETE */
router.delete('/:id/comment/:commentId', verifyToken, deleteComment)
router.delete('/:id',verifyToken ,deletePost) 

>>>>>>> Stashed changes
export default router;
