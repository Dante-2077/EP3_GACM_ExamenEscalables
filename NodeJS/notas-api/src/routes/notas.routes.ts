import {Router} from 'express';
import { getNotas, createNota } from '../controllers/notas.controller.ts';

const router = Router();

router.get("/", getNotas);
router.post("/", createNota);

export default router;
