import {Router} from 'express';
import { produtosService } from '../services/produtos.service';

const router = Router();


router.get("/", async (req, res) => {

const produtos = await produtosService.getAll();
return res.json(produtos);

});

router.post("/", async (req, res) => {

const produtos = await produtosService.create(req, body);
return res.status(201).json(produtos);

nome:
marca:
categoria:
preco:
quantidade:


});
