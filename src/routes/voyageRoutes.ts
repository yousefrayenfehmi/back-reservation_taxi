import { Router } from "express";
import ControlleurVoyage from "../controlleur/Controlleurvoyage";

const router = Router();

router.get("/", ControlleurVoyage.getAllVoyages);
router.get("/:id", ControlleurVoyage.getVoyageById);
router.post("/", ControlleurVoyage.createVoyage);
router.put("/:id", ControlleurVoyage.updateVoyage);
router.delete("/:id", ControlleurVoyage.deleteVoyage);

export default router; 