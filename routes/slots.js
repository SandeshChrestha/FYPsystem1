import express from "express";
import { createSlots, deleteSlots, getSlot, getSlots, updateSlots } from "../controllers/slots.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create 
router.post("/:futsalid", verifyAdmin, createSlots);


//update
router.put("/:id", verifyAdmin, updateSlots);

//delete
router.delete("/:id/:futsalid", verifyAdmin, deleteSlots);


//get
router.get("/:id", getSlot);

//get all
router.get("/", getSlots);




export default router