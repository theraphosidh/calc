import express from 'express'
import path from 'path'
import { OperParse } from './calcApi/calcOperator';
import { EvalAB } from './calcApi/executor';
import { ResultPresenter } from './calcApi/resultPresenter';
var bodyParser = require('body-parser');

const app = express();

const port = 8080
var clientPath = path.join(path.dirname(path.dirname(__filename)), 'Public')

app.use(express.static(clientPath))

app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('form');// if jade
    res.sendFile("index.html"); //if html file is within public directory
});


app.post('/', function(req,res){
    console.log(req.body);    
    let oper = OperParse(req.body.oper)
    let valA = req.body.operanda;
    let valB = req.body.operandb;

    let ev = new EvalAB();
    let presenter = new ResultPresenter()

    res.send(ev.Perform(valA, valB, oper, presenter));
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
