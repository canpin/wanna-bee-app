import { Router } from "express";
import { addSuperHero, getSuperPowers } from "../controllers/superheros"

const router: Router = Router();

router.get("/getSuperPowers", getSuperPowers);
router.post("/add", addSuperHero)

export default router;