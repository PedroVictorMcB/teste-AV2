const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Welcome to Toluca Mall!</h1>");
})

//rota do cadastro de produtos
app.get("/products", function(req,res){
    res.send("<h1>Toluca Mall Shopping List!</h1><br><ol><li>Bloody Bunny</li><li>Flauros Souvenir</li><li>Butcher's Stake</li><li>Cigarrets within White Claudia</li></ol>");
})

app.get("/clients", function(req,res){
    res.send("<h1>Toluca Mall Shopping Clients-List!</h1><br><ol><li>Alessa Gillesp</li><li>Dalhia Gillesp</li><li>Harry Mason</li><li>Lisa Garland</li><li>Samael The God</li></ol>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Pyramid Head found you.");
    }else{
        console.log("Welcome To Silent Hill!");
    }
})

