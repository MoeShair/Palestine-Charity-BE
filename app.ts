import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3002;

// MongoDB connection URI
const mongoURI = 'mongodb+srv://iman:<password>@cluster0.zonoxxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true, // Use the new parser
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there's an error
});

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
