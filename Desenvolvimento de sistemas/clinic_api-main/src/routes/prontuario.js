import { Router } from "express";
import { prismaClient } from "../../prisma/prisma.js";
import { prontuarioController } from "../controller/Prontuario/ProntuarioController.js";
export const prontuarioRouter = Router()

prontuarioRouter.get('/prontuarios', prontuarioController.getTodosOsProntuarios)

prontuarioRouter.get('/prontuario', prontuarioController.getProntuarioPorId)

prontuarioRouter.post('/prontuario', prontuarioController.postProntuario)

prontuarioRouter.put('/prontuario', prontuarioController.putProntuario)

prontuarioRouter.delete('/prontuario', prontuarioController.deleteProntuario)
