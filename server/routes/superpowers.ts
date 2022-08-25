import { Router } from "express";
import { getSuperPowers } from "../controllers/superpowers"

const router: Router = Router();

router.get("/superpowers", getSuperPowers);

export default router;