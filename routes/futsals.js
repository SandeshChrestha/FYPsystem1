import express from "express";
import Futsal from "../models/Futsal.js"
import { createFutsal, deleteFutsal, getFutsal, getFutsals, updateFutsal } from "../controllers/futsal.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create 
router.post("/", verifyAdmin, createFutsal);


//update
router.put("/:id", verifyAdmin, updateFutsal);

//delete
router.delete("/:id", verifyAdmin, deleteFutsal);


//get
router.get("/:id", getFutsal);

//get all
router.get("/", getFutsals);


export default router