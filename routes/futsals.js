import express from "express";
import Futsal from "../models/Futsal.js"
import { createFutsal, deleteFutsal, getFutsal, getFutsals, updateFutsal } from "../controllers/futsal.js";


const router = express.Router();

// create 
router.post("/", createFutsal);


//update
router.put("/:id", updateFutsal);

//delete
router.delete("/:id", deleteFutsal);


//get
router.get("/:id", getFutsal);

//get all
router.get("/", getFutsals);


export default router