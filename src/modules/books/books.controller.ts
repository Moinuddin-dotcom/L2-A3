import { Request, Response } from "express";
import { Books } from "./books.model";


const postBook = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const book = await Books.create(body);
        res.send({
            success: true,
            message: "Book created successfully",
            book
        })

    } catch (error) {
        res.send({
            success: false,
            message: "Error while posting book data",
            error
        })
    }
}


const getBooks = async (req: Request, res: Response) => {
    try {
        const book = await Books.find();
        res.send({
            success: true,
            message: "Books retrieved successfully",
            book
        })

    } catch (error) {
        res.send({
            success: false,
            message: "Error while getting books data",
            error
        })
    }
}


const getBooksById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const book = await Books.findById(bookId);
        res.send({
            success: true,
            message: "Books retrieved successfully",
            book
        })

    } catch (error) {
        res.send({
            success: false,
            message: "Error while getting books data",
            error
        })
    }
}


const updateSingleBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const singleBook = req.body;
        const book = await Books.findByIdAndUpdate(bookId, singleBook, { new: true });
        res.send({
            success: true,
            message: "Book updated successfully",
            book
        })

    } catch (error) {
        res.send({
            success: false,
            message: "Error while updating books data",
            error
        })
    }
}
const deleteSingleBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const book = await Books.findByIdAndDelete(bookId);
        res.send({
            success: true,
            message: "Book deleted successfully",
            data: null
        })

    } catch (error) {
        res.send({
            success: false,
            message: "Error while deleting books data",
            error
        })
    }
}

export const booksController = {
    postBook,
    getBooks,
    getBooksById,
    updateSingleBook,
    deleteSingleBook
}