import express from 'express';
import router from '../routes/produtos.routes';
import { produtosService } from './services/produtos.service';

const app = express ();

const port = 3000;

app.use(express.json())

app.use("/produtos", produtosServiceRouter)

app.listen(port, () => {
console.log(`App rodando em http://localhost:3000`);

})