import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mensagem: "Lista de todos os animais"
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        mensagem: `A mostrar o animal com o ID: ${id}`
    });
});

router.post("/", (req, res) => {
    const novoAnimal = req.body;
    res.status(201).json({
        mensagem: "Animal criado com sucesso!",
        dadosRecebidos: novoAnimal
    });
});


router.put("/:id", (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    res.json({
        mensagem: `Animal com o ID ${id} atualizado com sucesso!`,
        dadosRecebidos: dadosAtualizados
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        mensagem: `Animal com o ID ${id} apagado com sucesso!`
    });
});

export default router;