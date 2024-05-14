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

const CommentSchema = new Schema<IComment>(
    {
        user: {
            userId: {type: String, required: true},
            userImage: {type: String, required: true},
            firstName: {type: String, required: true},
            lastName: {type: String, required: false},
        },
        text: {type: String, required: true},
    },
    {
        timestamps: true,
    }
)

// we first check it the comment is already intialized, if not we initialize it
export const CommentModel = models.Comment ||  mongoose.model<IComment>("Comment", CommentSchema) 