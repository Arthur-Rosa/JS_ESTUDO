const express = require("express");

const app = express();

app.use(express.json());

/* 
// Midware é acessado primeiro
app.use((req, res, next) => {
    console.log("acessou o midware");
    next();
}); 
*/

function valContato(req, res, next){
    console.log("Validação do email : Acessou");
    if(!req.body.email){
         return res.json({
             erro: true,
             mensagem: "Necessario enviar o email"
         });
    };
    return next();
};

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

// 
app.post("/contato", valContato, (req, res) => {
    console.log("Acessou a rota Cadastrar");

    var {nome} = req.body;
    var {email} = req.body;

    // implementar a regra para salvar no banco de dados

    return res.json({
        nome,
        email
    });
});

app.put("/contato/:id", valContato, (res, req) => {
    const { id } = req.params;
    const { _id, nome, email } = req.body;

    return res.json({
        id,
        _id,
        nome,
        email
    });
});

app.delete("/contato/:id", (req, res) => {
    const { id } = req.params;

    return res.json({
        id
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});