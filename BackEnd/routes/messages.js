import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// add
router.post("/", async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get
router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
