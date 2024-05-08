import mongoose, {Schema, Document, models, Model} from "mongoose";
import { IUser } from "@/types/user";
import { IComment } from "@/types/comments";

export interface PostBaseInterface {
    user: IUser,
    text: string,
    imageUrl?: string,
    comments?: IComment[],
    likes?: string[],
}