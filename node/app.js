const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem vindo");
});

app.get("/contato/:id", (req, res) => {
    // res.send("Visualizar contato");

    const {id} = req.params;

    const sit = req.query.sit;

    return res.json({
        id,
        nome: "Arthur",
        email: "arthur@gmail",
        senha: "123",
        sit
    });
});

app.post("/contato", (req, res) => {
    var {nome} = req.body;
    var {email} = req.body;

    // implementar a regra para salvar no banco de dados

    return res.json({
        nome,
        email
    });
});

app.put("/contato/:id", (res, req) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    return res.json({
        id,
        nome,
        email
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});