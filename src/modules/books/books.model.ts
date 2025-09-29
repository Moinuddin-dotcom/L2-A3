import { model, Schema } from "mongoose";
import { IBook } from "./books.interface";


const booksSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
        type: String,
        required: true,
        enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
        default: "FICTION"
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true },
    available: { type: Boolean, default: true }
}, { timestamps: true });

export const Books = model<IBook>("Books", booksSchema);