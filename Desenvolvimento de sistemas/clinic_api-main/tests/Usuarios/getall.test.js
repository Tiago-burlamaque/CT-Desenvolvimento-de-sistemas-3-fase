import { prismaClient } from "../../prisma/prisma";

const baseUrl = "htttp://localhost:3000"

test("Consulta ao banco retorna lista de usuários", async () => {
    const usuarios = await prismaClient.usuario.findMany()
    expect(Array.isArray(usuarios)).toBe(true);
});





