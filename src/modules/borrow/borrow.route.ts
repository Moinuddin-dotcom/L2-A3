import { Router } from "express";
import { borrowController } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post('/', borrowController.postBorrowBook)
borrowRoute.get('/', borrowController.getBorrowedSummary)


export default borrowRoute;