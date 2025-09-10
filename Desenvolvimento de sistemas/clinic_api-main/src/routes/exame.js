import { Router } from "express";
import { prismaClient } from '../../prisma/prisma.js';
import { exameController } from "../controller/Exame/ExameController.js";

export const exameRouter = Router()

exameRouter.get('/exames', exameController.getTodosExames)

exameRouter.get('/exames:id', exameController.getExamePorId)

exameRouter.post('/exames', exameController.postExame)

exameRouter.put('/exames', exameController.putExame)

exameRouter.delete('/exames', exameController.deleteExame)