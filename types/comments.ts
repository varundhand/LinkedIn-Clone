import mongoose, {Schema, Document, models, Model} from "mongoose";
import { IUser } from "@/types/user";


export interface ICommentBase {
    user: IUser,
    text: string,
}

// these are the fields that we dont provide, but it infers on its own
// we did this because, we cant provide these fields in the client 
export interface IComment extends ICommentBase, Document {
    createdAt: Date,
    updatedAt: Date,
}