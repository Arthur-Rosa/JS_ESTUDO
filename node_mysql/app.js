const express = require("express");
const db = require('./models/db');
const Usuario = require('./models/Usuario');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        erro: false,
        nome: "nome Usuario",
        email: "emailDoUsuario"
    });
});

app.get("/users", async (req, res) => {
    await Usuario.findAll({
        order: [['id', 'ASC']]
    })
    .then((users) => {
        return res.json({
            success: 'Sucesso',
            users
        });
    }).catch(() => {
        return res.status(400).json({
            erro: 'Ocorreu um erro',
            mensagem: 'Erro: nenhum usuário encontrado'
        });
    });
});

app.get("/user/:id", async (req, res) => {
    const { id } = req.params;

    /* await Usuario.findAll({
        where: {
            id: id
        }
    }) */
    await Usuario.findByPk(id)
    .then((user) => {
        return res.json({
            erro: false,
            user
        });
    }).catch(() => {
        return res.status(400).json({
            erro: 'Ocorreu um erro',
            mensagem: 'Erro: nenhum usuário encontrado'
        });
    });    
});

app.post("/user", async (req, res) => {
    const { name, email } = req.body;

    await Usuario.create(req.body).
    then(() => {
        Usuario.save();
        return res.json({
            erro: 'Sucesso',
            mensagem: 'Cadastrado com Sucesso',
            name,
            email
        });
    }).catch(() => {
        return res.status(400).json({
            erro: 'Error',
            mensagem: 'Não foi possivel criar o Usuario'
        });
    });    
});

app.put("/user", async (req, res) => {
    const { id } = req.body;

    await Usuario.update(req.body, {
        where:{
            id
        }
    }).then((user) => {
        return res.json({
            erro: 'Sucesso',
            mensagem: 'Editado com sucesso\ '
        });
    }).catch(() => {
        return res.status(400).json({
            erro: 'Error',
            mensagem: 'Erro ao editar o usuario'
        });
    });
});

app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        erro: false,
        id
    });
});

app.listen(8080, () => {
    console.log("Server Iniciado");
});