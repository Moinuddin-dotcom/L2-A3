import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.tnterface";

const borrowSchema = new Schema<IBorrow>({
    book: { type: Schema.Types.ObjectId, ref: 'Books', required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true }
}, { timestamps: true });


export const Borrow = model<IBorrow>("Borrow", borrowSchema);