import { prismaClient } from "../../prisma/prisma"

test("Inserção ao banco", async () => {
    const data = {
        data: {
            nome:  "Tiago",
            cargo: "Estudante",
            email: "tiago@gmail.com",
            senha: "tiago123",
        }
    }
    const usuario = await prismaClient.usuario.create({
        data:data,
    })
    expect(usuario).toMatchObject(usuario)
})