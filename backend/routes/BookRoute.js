import express from "express";
import {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/Book.js";
import { 
    createBookUser,
    deleteBookUser, 
    getBookUserId, 
    getBookUsers, 
    updateBookUser 
} from "../controllers/UserBook.js";


import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/books', getBooks);
router.get('/book/:id', getBookById);
router.post('/book', createBook);
router.patch('/book/:id', verifyUser, updateBook);
router.delete('/book/:id', deleteBook);

router.get('/user-book', getBookUsers)
router.get('/user-book/:id', getBookUserId)
router.post('/user-book', createBookUser)
router.patch('/user-book', updateBookUser)
router.delete('/user-book', deleteBookUser)

export default router;