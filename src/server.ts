import express, { request, response } from "express";
import "reflect-metadata";
import './database/index'

const app = express();


app.get('/teste', (request, response) =>{

    return response.send('NLWGO')

});

app.post('/testepost', (request, response)=>{

    return response.send('poc')

})



app.listen(3000, () => console.log('server is running'));
