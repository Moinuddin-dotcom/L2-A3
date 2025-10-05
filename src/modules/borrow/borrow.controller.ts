import { Request, Response } from "express";
import { Borrow } from "./borrow.model";
import { Books } from "../books/books.model";


const postBorrowBook = async (req: Request, res: Response) => {
    try {
        const { book: bookId, quantity, dueDate } = req.body;
        const book = await Books.findById(bookId);
        if (!book || book.copies < quantity) {
            res.status(400).json({
                success: false,
                message: 'Not enough copies available',
                error: 'Insufficient copies'
            });
            return;
        }

        book.copies -= quantity;
        if (book.copies === 0) book.available = false;
        await book.save();

        const borrowBook = await Borrow.create({ book: bookId, quantity, dueDate });
        res.json({
            success: true,
            message: "Book borrowed successfully",
            data: borrowBook
        })
    } catch (error: any) {
        console.error('Borrow book error:', error);
        res.status(500).json({
            success: false,
            message: "Error making borrow request",
            error: error.message || error
        });
    }

}

const getBorrowedSummary = async (_req: Request, res: Response): Promise<void> => {
    try {
        const summary = await Borrow.aggregate([
            {
                $group: {
                    _id: '$book',
                    totalQuantity: { $sum: '$quantity' }
                }
            },
            {
                $lookup: {
                    from: 'books',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'bookInfo'
                }
            },
            { $unwind: '$bookInfo' },
            {
                $project: {
                    book: {
                        title: '$bookInfo.title',
                        isbn: '$bookInfo.isbn'
                    },
                    totalQuantity: 1
                }
            }
        ]);

        res.json({
            success: true,
            message: 'Borrowed books summary retrieved successfully',
            data: summary
        });
    } catch (error: any) {
        console.error('Borrow summary error:', error);
        res.status(500).json({
            success: false,
            message: 'Summary failed',
            error: error.message || error
        });
    }
};


export const borrowController = {
    postBorrowBook, getBorrowedSummary
}