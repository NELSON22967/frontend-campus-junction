import express from 'express';
import cors from 'cors';

const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

app.get('/api/store',(req,res)=>{
    res.json({
        message:'Hello world from server api'
    })
})

app.listen(port,()=>{
    console.log('Listeningg to port:3000')
})