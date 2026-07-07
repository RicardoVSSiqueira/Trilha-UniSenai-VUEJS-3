const express = require('express');
const cors = require('cors');

const banco = require('./Config/database');

const authRouter = require('./src/Routes/authRouter');
const produtoRouter = require('./src/Routes/productRouter');
const weatherRouter = require('./src/Routes/weatherRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/produtos', produtoRouter);
app.use('/weather', weatherRouter);

banco.sync().then(() => {

    app.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000');
    });

}).catch((error) => {
    console.log(error);
});