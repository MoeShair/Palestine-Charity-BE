import express, { Request, Response } from 'express';
import Post, { IPost } from '../models/post'; // Assuming Post is exported from '../models/post'
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("we are on posts");
});

router.post('/', async (req: Request, res: Response) => {
    const post: IPost = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost: IPost = await post.save();
        res.json(savedPost);
    } catch (err: any) { // Explicitly specify the type as 'any'
        res.status(400).json({ message: err.message });
    }
});

export default router;
