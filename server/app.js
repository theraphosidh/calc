"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const calcOperator_1 = require("./calcApi/calcOperator");
const executor_1 = require("./calcApi/executor");
const resultPresenter_1 = require("./calcApi/resultPresenter");
var bodyParser = require('body-parser');
const app = express_1.default();
const port = 8080;
var clientPath = path_1.default.join(path_1.default.dirname(path_1.default.dirname(__filename)), 'Public');
app.use(express_1.default.static(clientPath));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.render('form'); // if jade
    res.sendFile("index.html"); //if html file is within public directory
});
app.post('/', function (req, res) {
    console.log(req.body);
    let oper = calcOperator_1.OperParse(req.body.oper);
    let valA = req.body.operanda;
    let valB = req.body.operandb;
    let ev = new executor_1.EvalAB();
    let presenter = new resultPresenter_1.ResultPresenter();
    res.send(ev.Perform(valA, valB, oper, presenter));
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
