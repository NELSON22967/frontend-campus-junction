import express from 'express';
import cors from 'cors';

const app=express();
const port=3010;



//product store

const products=[
    {id:1,name:'phone',price:40000,type:'samsung',link:'resized_photo_300x250.jpg'},
    {id:2,name:'phone',price:234000,type:'tecno',link:'resized_photo_300x250.jpg'},
    {id:3,name:'phone',price:40000,type:'iphone',link:'resized_photo_300x250.jpg'},
    {id:4,name:'phone',price:40000,type:'samsung',link:'resized_photo_300x250.jpg'}
]


//midleware
app.use(cors());
app.use(express.json());

app.get('/api/prod',(req,res)=>{
    res.json({
        message:'stores product on sale',
       
         
    })
})

app.listen(port,()=>{
    console.log(`listening to port:${port}`)
})