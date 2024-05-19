import mongoose, {Schema, Document, models, Model} from "mongoose";
import { IUser } from "@/types/user";
import { IComment, ICommentBase } from "@/types/comments";

export interface PostBaseInterface {
    user: IUser,
    text: string,
    imageUrl?: string,
    comments?: IComment[],
    likes?: string[],
}

export interface IPost extends PostBaseInterface, Document {
    createdAt: Date,
    updatedAt: Date,
}

// Instance Method: perform operations on individual documents
// Static Method: perform operations on the entire collection
interface IPostMethods {
    likedPost(userId: string): Promise<void>;
    unlikePost(userId: string): Promise<void>;
    commentOnPost (comment: ICommentBase): Promise<void>;
    getAllComments(): Promise<IComment[]>;
    removePost(): Promise<void>;
}

interface IPostStatics {
    getAllPosts(): Promise<IPostDocument[]>;
}

export interface IPostDocument extends IPost, IPostMethods {} // singular instance or post 
interface IPostModel extends Model<IPostDocument>, IPostStatics {} // entire collection of posts
