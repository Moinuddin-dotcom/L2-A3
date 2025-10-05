import { Request, Response } from "express";
import { Books } from "./books.model";


const postBook = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const book = await Books.create(body);
        res.json({
            success: true,
            message: "Book created successfully",
            book
        });

    } catch (error: any) {
        console.error('Post book error:', error);
        res.status(500).json({
            success: false,
            message: "Error while posting book data",
            error: error.message || error
        });
    }
}


const getBooks = async (req: Request, res: Response) => {
    try {
        const book = await Books.find();
        res.json({
            success: true,
            message: "Books retrieved successfully",
            book
        });

    } catch (error: any) {
        console.error('Get books error:', error);
        res.status(500).json({
            success: false,
            message: "Error while getting books data",
            error: error.message || error
        });
    }
}


const getBooksById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const book = await Books.findById(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.json({
            success: true,
            message: "Books retrieved successfully",
            book
        });

    } catch (error: any) {
        console.error('Get book by ID error:', error);
        res.status(500).json({
            success: false,
            message: "Error while getting single books data",
            error: error.message || error
        });
    }
}


const updateSingleBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const singleBook = req.body;
        const book = await Books.findByIdAndUpdate(bookId, singleBook, { new: true });
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.json({
            success: true,
            message: "Book updated successfully",
            book
        });

    } catch (error: any) {
        console.error('Update book error:', error);
        res.status(500).json({
            success: false,
            message: "Error while updating books data",
            error: error.message || error
        });
    }
}
const deleteSingleBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const book = await Books.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.json({
            success: true,
            message: "Book deleted successfully",
            data: null
        });

    } catch (error: any) {
        console.error('Delete book error:', error);
        res.status(500).json({
            success: false,
            message: "Error while deleting books data",
            error: error.message || error
        });
    }
}

export const booksController = {
    postBook,
    getBooks,
    getBooksById,
    updateSingleBook,
    deleteSingleBook
}