import express from 'express';

const app = express();

app.get(
    "/",
    (req,res) =>{
        resposta.send("Hello World of full stack!");
    });

    app.listen(3000);