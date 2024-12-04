import express from "express";
import { deleteMessage, getAllMessages, sendMesage } from "../controller/messageController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMesage);
router.get("/getall", getAllMessages);
router.delete("/delete/:id", isAuthenticated, deleteMessage);



export default router;