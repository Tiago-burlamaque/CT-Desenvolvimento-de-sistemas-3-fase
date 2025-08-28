import { Router } from "express";
import { pacienteController } from "../controller/Paciente/PacienteController.js";

export const pacienteRouter = Router()

pacienteRouter.get('/paciente', pacienteController.getTodosPacientes)

pacienteRouter.get('/paciente:id', pacienteController.getPacientePorId)

pacienteRouter.post('/paciente', pacienteController.postPaciente)

pacienteRouter.put('/paciente:id', pacienteController.putPaciente)

pacienteRouter.delete('/paciente:id', pacienteController.deletePaciente)

