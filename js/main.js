function clicou(){
    alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("http://google.com/");
    //window.location.href = "http://google.com/";
}

function trocar(elemento){
    //document.getElementById("mouseouver").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert ("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/* funções
function soma(n1,n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)/
//}

//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/* Date
var d = new Date();
alert(d);
alert(d.getDay() + 1)//Dia da semana de 0 a 6
alert(d.getDate());//Dia do mês
alert(d.getMonth() + 1);//Mês do ano de 0 a 11
alert(d.getFullYear());
alert(d.getHours());
alert(d.getMinutes());
*/
/*repetição FOR
var count;
for(count = 0;count < 5;count++){
    alert(count);
}
*/

/* repetição
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/* condicional
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
*/


/* Dicionário

var frutas = [{nome:"maça", cor:"vermelha"} , {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);

*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/* Array
var lista = ["maça","pêra","laranja"];
console.log (lista);
//lista.push ("uva");
//console.log (lista);
//lista.pop();
console.log (lista.length);
console.log (lista.reverse().toString());
console.log (lista.join(" - "));
//console.log (lista.toString());
*/
/* Variáveis
var nome = "André Naim Naue";
var idade = 41;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

var tudo = nome + " " + (idade + idade2) + " " + frase;
//alert(nome + " tem " + (idade + idade2) + " anos");
console.log (tudo.replace ("Japão", "Brasil"));
alert (tudo.replace (idade + idade2, idade - idade2));
*/
