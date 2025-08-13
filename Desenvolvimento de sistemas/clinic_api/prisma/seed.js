import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.usuario.createMany({
        data: [
        {   
            nome: "João", 
            email: "gfdgdgdf@gmail.com",
            senha: "123",
            cargo: "Médico"
        },
        ],
    });

    await prisma.paciente.create({
        data: {
            nome: "João",
            sexo: "Masculino",
            data_nascimento: new Date("1866-02-20"),
            cpf: "154.458.695.45",
            telefone: 54654654,
            email: "joao22@gmail.com",
            consultas: {
                create: [
                    {
                        motivo: "Dor nas costas", 
                        data_consulta: new Date("2023-08-25"),
                        observacoes: "Ibuprofeno 3 vezes ao dia",
                        medico_
                    }
                ]
            },
            // exame: {
            //     create: [
            //         {
            //             tipo: "Densiometro",
            //             data_exame: new Date("2023-08-25"),
            //             resultado: "Deu ruim",
            //             link_arquivo: "url.com.br/exame.pdf",
            //             observacoes: ""
            //         }
            //     ]
            // }
        }
    })
}

main() 
.then ( () => prisma.$disconnect())
.catch( (e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
});