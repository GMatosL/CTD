//Dicas
// TAB completa o nome 


// variável
// var = pode ser substituida e acessada dentro ou de um bloco de execução {} pode ser substituido
// let = pertence exclusivamente a um bloco de execução, definido por chaves {} Não pode ser definido novamente, mas pode ser substituido.
// const = igual ao let, mas não pode ser substituido

let nomeDeUsuario = "Guilherme";

console.log (nomeDeUsuario);

nomeDeUsuario = "Carlos";

console.log (nomeDeUsuario);

// Tipos de dados
// int  = Numero inteiro 
// String = Texto
// Booleanos = True; false
//  Null = 
// Undefined = 
// Arrays = listas

let diaEstaChuvoso = true;

console.log ("o dia está chuvoso? " + diaEstaChuvoso);

let jogadores = null;

console.log ("Quais os jogadores? " + jogadores);

// Objetos Literais
// number  = Numeros
// String = Texto
// Booleanos = True; false
//  Null =  Vazio ou desconhecido
// Undefined = ausencia de valor
// NaN = Indica que o valor não pode ser passado como um número

let moto = {
    marca: "Honda",
    ano: "2019"
}
console.log(moto);


// Nos arrays usar colchetes e separar as propriedades por virgula
let seriesFavoritas = ["Breaking Bed", "Friends"]
console.log (seriesFavoritas);

// If Else 
// condicao fica entre colchetes 
// o resultado entre chaves
// else inicia-se após as chaves do resultado da condicao de if
//

let dia = "quarta";

if(dia =="domingo"){
    console.log("vou para praia!");
}else {console.log("fico em casa")}


let resultado = 11;

if (resultado==11){
    console.log("incorreto");
   
}
else if (resultado==7) {
console.log ("incorreto");
}
else {
    console.log("correto")
}

let status = true 

if (status==true){
    console.log("O valor é true - verdadeiro")
}
else {
    console.log("O valor é false - falso")
}

// lenght

let texto = "Oi eu sou o Gui"
console.log(texto.length);

//indexOF

console.log(texto.indexOf("Gui"))

//slice 

let palavra = texto.slice(0,3)
console.log(palavra);

//trim
// retira os espações desnecessários


//replace
let subs = texto.replace("Oi", "olá");
console.log(subs);

//split 
//converte texto em array
console.log(texto.split(" "))

