require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const connetToDb = require('./src/database/db');

const port = process.env.PORT || 3333;

app.use(express.static(path.join(__dirname, "public")));

connetToDb();

app.get('/', (req, res) => {
   res.send('hello word')
})

app.listen(3333, () =>
   console.log(`Servidor rodando em http://localhost:${port}`)
);