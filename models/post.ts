import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IPost extends Document {
    title: string;
    description: string;
    date: Date;
}

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const PostModel: Model<IPost> = mongoose.model<IPost>('Post', PostSchema);

export default PostModel;
