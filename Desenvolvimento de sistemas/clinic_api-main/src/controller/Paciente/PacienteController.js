import { prismaClient } from "../../../prisma/prisma.js";

class PacienteController {
    constructor() { }
    async getTodosPacientes(_,res) {
        try {
            const pacientes = await prismaClient.paciente.findMany();
            return response.json(pacientes)
        }
        catch (e) {
            console.log(e)
        }
    }
    async getPacientePorId(req,res) {
        const params = req
        try {
            const pacientes = await prismaClient.paciente.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
            if (!pacientes) return response.status(404).send("Paciente não existe!")
            return response.json(pacientes)
        }
        catch (e) {
            console.log(e)
        }
    }
    async postPaciente(req, res) {
        try {
            const { body } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "data_nascimento" &&
                    key !== "sexo" &&
                    key !== "responsavel"
                ) return res.status(404).send("Colunas não existentes")
            }
            const pacientes = await prismaClient.paciente.create({
                data: {
                    ...body,
                    data_nascimento: new Date(body.data_exame) // corrigir esse cara no put quando nao se manda ele... TO-DO
                },
            })
            return res.status(201).json(pacientes)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
            }
        }
    }
    async putPaciente(req, res) {
        try {
            const { body, params } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "data_nascimento" &&
                    key !== "sexo" &&
                    key !== "responsavel"
                ) return res.status(404).send("Colunas não existentes")
            }
            await prismaClient.paciente.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })
            const pacienteAtualizado = await prismaClient.paciente.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
    
            return res.status(201).json({
                message: "Paciente atualizado!",
                data: pacienteAtualizado
            })
    
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco")
            }
    
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
            }
        }
    }
    async deletePaciente(req, res) {
        try {
            const pacienteDeletado = await prismaClient.paciente.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Paciente deletado!",
                data: pacienteDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco")
            }
        }
    }
}

export const pacienteController = new PacienteController();
