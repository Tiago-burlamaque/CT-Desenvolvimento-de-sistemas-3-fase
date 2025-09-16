import jsonServer from "json-server"

let server;
const baseURL = "http://localhost:3000"

beforeAll((done) => {
    const app = jsonServer.create()
    const router = jsonServer.router("db.json")
    const middlewares = jsonServer.defaults()

    app.use(middlewares)
    app.use(router)

    server = app.listen(3000, done)
})

afterAll((done) => {
    server.close(done);
})

test("GET /equipamentos retorna 200", async () => {
    const res = await fetch(`${baseURL}/equipamentos`)
    expect(res.status).toBe(200);
})

test("GET /equipamentos/id retorna usuário válido", async () => {
    const res = await fetch(`${baseURL}/equipamentos/1`);
    const data = await res.json();
    expect(data).toHaveProperty("id", 1)
})

test("POST /equipamentos cria um usuário", async () => {
    const novoEquipamento = {
        nome: "Celular"
    }
    const res = await fetch(`${baseURL}/equipamentos`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body:JSON.stringify(novoEquipamento),
    })
    const data = await res.json();
    expect(data.nome).toBe("Celular")
})

test("PUT /equipamentos Atualiza um nome de um equipamento", async () => {
    const res = await fetch(`${baseURL}/equipamentos/4`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: 4,
            nome: "Tablet",
        }),
    });
    const data = await res.json();
    expect(data.nome).toBe("Tablet")
})

test("PATH /equipamentos/id atualiza parcialmente", async () => {
    const res = await fetch(`${baseURL}/equipamentos/6`, {
        method: "PATH",
        headers:  { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: "TV" }),
    });
    const data = await res.json();
    console.log(data)
    expect(data.nome).toBe("TV")
})