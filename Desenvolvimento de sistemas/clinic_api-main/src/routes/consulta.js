import { Router } from "express";
import { prismaClient } from "../../prisma/prisma.js";
import { consultaController } from "../controller/Consulta/ConsultaController.js";

export const consultasRouter = Router();

consultasRouter.get('/consultas', consultaController.getTodasConsultas)

consultasRouter.get('/consultas:id', consultaController.getPorId)

consultasRouter.post('/consultas', consultaController.postConsulta)

consultasRouter.put('/consultas:id', consultaController.putConsulta)

consultasRouter.delete('/consultas:id', consultaController.deleteConsulta)