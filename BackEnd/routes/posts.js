import express from "express";
import { commentPost, getFeedPosts, getUserPosts, likePost, deletePost, updatePost, getPostById } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);


/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, commentPost);

router.get("/:id",verifyToken, getPostById);
router.delete("/:id",verifyToken, deletePost); // add deletePost route
router.put("/:id",verifyToken, updatePost); // update updatePost route


export default router;
