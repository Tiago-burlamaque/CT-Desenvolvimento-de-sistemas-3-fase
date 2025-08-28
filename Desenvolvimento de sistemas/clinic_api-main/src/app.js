import express from 'express';
import { usuarioRouter } from './routes/usuarios.js';
import { exameRouter } from './routes/exame.js';
import { pacienteRouter } from './routes/pacientes.js';
import { prontuarioRouter } from './routes/prontuario.js';
import { consultasRouter } from './routes/consulta.js';

export const app = express()
app.use(express.json())

// rotas usuario
app.use(usuarioRouter);

// rotas exames
app.use(exameRouter);

// rotas pacientes
app.use(pacienteRouter);

// rotas prontuario
app.use(prontuarioRouter);

// rotas consulta
app.use(consultasRouter);

app.listen(3000, () => console.log("Api rodandos"))