import express from "express";
import filmeController from "../controllers/filmeController.js";

const router = express.Router();
const filme = new filmeController();
// bloco de tratamento de erro
router.get('/', (req, res)=> {
    try {
        filme.BuscarTodosOsFilmes(req, res);
    }catch(err){
        res.status(500).json({erro: err.message});
    }
});

router.post('/', (req, res)=> {
    try{
        filme.CadastrarFilme(req, res);
    }
    catch(err){
        res.status(500).json({erro: err.message});
    }
})

export default router;