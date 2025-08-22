import express from 'express';
import { prismaClient } from '../prisma/prisma.js';

const app = express()
app.use(express.json())

app.get('/usuarios', async (request, response) => {
    try{
        const usuarios = await prismaClient.usuario.findMany();
        
        return response.json(usuarios)
   
    }
    catch (e){
            console.log(e)
    }
});



app.get("/usuarios/:id", async(request, response)=>{
  try{
      const usuario = await prismaClient.usuario.findUnique({
        where: {
          id: Number(request.params.id)
        }
      })
      return response.json(usuario)
  }
  catch (e){
          console.log(e)
  }
})

app.post('/usuarios', async (request, response) => {
    try{
        const { body } = request;
        const usuario = await prismaClient.usuario.create({
            data: {
                nome: body.nome,
                cargo: body.cargo,
                email: body.email,
                senha: body.senha
            }
        });
        return response.status(201).json(usuario);
    }
    catch (e){
      if(e.code === 'P2002') {
        return response.status(400).send("Falha ao criar usuario: email ja cadastrado")
      }
      console.log(e)
            response.status(404).send("Erro ao criar usuario")
    }
});
app.put("/usuarios/:id", async(req, res)=>{
  try {
    const { body, params } = req
    
    await prismaClient.usuario.update({
      where: { id: Number(params.id) },
      data: { 
        ...body
       },
    })
    
    const usuarioAtualizado = await prismaClient.usuario.findUnique({
      where: {
        id: Number(params.id)
      }
    })

    res.status(201).json({
      message: "Usuário atualizado!",
      data: usuarioAtualizado
    })
    
  } catch (error) {
    console.log(error)
      if(error.code === 'P2002') {
        return response.status(400).send("Falha ao criar usuario: email ja cadastrado")
      }
  }
})

app.delete("/usuarios/:id", async(req, res) => {
  const { params } = req
  try {
    const usuarioDeletado = await prismaClient.usuario.delete({
      where: {
        id: Number(params.id),
      },
    })
    res.status(200).json({
      message: "Usuário deletado!",
      data: usuarioDeletado
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/pacientes', async (request, response) => {
    try{
        const pacientes = await prismaClient.paciente.findMany();
        
        return response.json(pacientes)
   
    }
    catch (e){
            console.log(e)
    }
});

app.get("/pacientes/:id", async(request, response)=>{
  try{
      const paciente = await prismaClient.paciente.findUnique({
        where: {
          id: Number(request.params.id)
        }
      })
      return response.json(paciente)
  }
  catch (e){
          console.log(e)
  }
})    

app.post('/pacientes', async (request, response) => {   

    try{
        const { body } = request;
        const paciente = await prismaClient.paciente.create({
            data: {
                nome: body.nome,
                sexo: body.sexo,
                data_nascimento: new Date(body.data_nascimento),
                cpf: body.cpf,
                telefone: body.telefone,
                email: body.email
            }
        });
        return response.status(201).json(paciente);
    }
    catch (e){
      console.log(e)
      response.status(404).send("Erro ao criar paciente")
    }
});

app.put("/pacientes/:id", async(req, res)=>{
  try {
    const { body, params } = req
    
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

    res.status(201).json({
      message: "Paciente atualizado!",
      data: pacienteAtualizado
    })
    
  } catch (error) {
    console.log(error)
  }
})

app.delete("/pacientes/:id", async(req, res) => {
  const { params } = req
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
    console.log(error)
  }
})

app.get('/exames', async (request, response) => {
    try{
        const exames = await prismaClient.exame.findMany();
        
        return response.json(exames)
   
    }
    catch (e){
            console.log(e)
    }
});

app.get("/exames/:id", async(request, response)=>{
  try{
      const exame = await prismaClient.exame.findUnique({
        where: {
          id: Number(request.params.id)
        }
      })
      return response.json(exame)
  }
  catch (e){
          console.log(e)
  }
})

app.post('/exames', async (request, response) => {
    try{
        const { body } = request;
        const exame = await prismaClient.exame.create({
            data: {
          tipo_exame: body.tipo_exame,   
          resultado: body.resultado,    
          data_exame:  body.data_exame ? new Date(body.data_exame) : null,   
          link_arquivo: body.link_arquivo, 
          observacoes: body.observacoes,  
          paciente_id: body.paciente_id ? Number(body.paciente_id) : null,
            }
        });
        return response.status(200).json(exame);
    }
    catch (e){
      console.log(e)
      response.status(404).send("Erro ao criar exame")
    }
});

app.put("/exames/:id", async(req, res)=>{
  try {
    const { body, params } = req
    
    await prismaClient.exame.update({
      where: { id: Number(params.id) },
      data: {
        ...body
       },
    })
    
    const exameAtualizado = await prismaClient.exame.findUnique({   
      where: {
        id: Number(params.id)
      }
    })

    res.status(201).json({
      message: "Exame atualizado!",
      data: exameAtualizado
    })
    
  } catch (error) {
    console.log(error)
  }
})

app.delete("/exames/:id", async(req, res) => {
  const { params } = req
  try {
    const exameDeletado = await prismaClient.exame.delete({
      where: {
        id: Number(params.id),
      },
    })
    res.status(200).json({
      message: "Exame deletado!",
      data: exameDeletado
    })
  } catch (error) {
    console.log(error)
  }
})  

app.listen(3000, ()=> console.log("Api rodando"))