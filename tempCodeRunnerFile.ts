import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// MongoDB connection URI
const mongoURI ='mongodb+srv://imansalameh:<password>@iman2002.mongodb.net/';



// Define routes
app.get('/', (req: Request, res: Response) => {
    res.send("we are on home");
});

app.get('/posts', (req: Request, res: Response) => {
    res.send("we are on posts");
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log("hi");
