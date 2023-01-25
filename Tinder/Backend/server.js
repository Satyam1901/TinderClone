import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'
//app config 
const app = express();
var port = process.env.port || 3005
const connection_url = 'mongodb+srv://admin:ScRTbfrLHGQY0Xjp@cluster0.lcmtw.mongodb.net/tinderdb?retryWrites=true&w=majority'

//middleware
app.use(express.json());
app.use(Cors());
//db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//api endpoints
app.get("/",(req, res)=> res.status(200).send('Hello World !'));

app.post("/tinder/cards",(req,res) => {
    const dbCards = req.body;
    Cards.create(dbCards,(err,data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.get("/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});
//listner
app.listen(port,()=>{
    console.log(`Listening on localhost :${port}`);
})