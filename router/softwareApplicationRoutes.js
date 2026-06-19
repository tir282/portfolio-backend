import express from "express";
import { addNewAplication, deleteAplication, getAllAplications } from "../controller/softwareApplicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewAplication );
router.delete("/delete/:id", isAuthenticated, deleteAplication);
router.get("/getall", getAllAplications );



export default router;