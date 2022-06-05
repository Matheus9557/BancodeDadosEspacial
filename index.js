require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.API_PORT;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

const pontoController = require('./controllers/PontoController');

app.post('/pontos', pontoController.addPonto);

app.get('/', pontoController.sincronizar);

app.get('/lista', pontoController.listarPontos);