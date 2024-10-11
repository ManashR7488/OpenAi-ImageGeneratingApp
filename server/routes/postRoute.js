import express from 'express';
import { createPosts, getAllPosts } from '../controllers/postsCon.js';

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPosts);

export default router;