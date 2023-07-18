import express  from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import "./dbConnect.js"


const app = express();
const porta = process.env.porta || 3700;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const direorioPublico = path.join(caminhoAtual, "../..","public");
app.use(express.static(direorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(porta, ()=> console.log(`-->> Servidor Rodando na porta ${porta}, eitaaa! <<--`));

const io = new Server(servidorHttp);

export default io;