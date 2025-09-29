import { Router } from "express";
import { booksController } from "./books.controller";


const bookRoute = Router();

bookRoute.post('/', booksController.postBook)
bookRoute.get('/', booksController.getBooks)
bookRoute.get('/:bookId', booksController.getBooksById)
bookRoute.put('/:bookId', booksController.updateSingleBook)
bookRoute.delete('/:bookId', booksController.deleteSingleBook)





export default bookRoute;