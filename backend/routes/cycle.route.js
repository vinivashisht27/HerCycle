import express from "express";
import { 
    getCycleData, 
    logSymptoms, 
    getMonthlyHistory 
} from "../controllers/cycle.controller.js";

// We will add middleware later to protect these routes
// import { protectRoute } from "../middleware/protectRoute.js"; 

const router = express.Router();

// Route: GET /api/cycle/current
// Description: Get today's cycle day, phase, and predictions
router.get("/current", getCycleData);

// Route: POST /api/cycle/log
// Description: User logs symptoms (cramps, mood, flow)
router.post("/log", logSymptoms);

// Route: GET /api/cycle/history
// Description: Get data for the calendar view
router.get("/history", getMonthlyHistory);

export default router;