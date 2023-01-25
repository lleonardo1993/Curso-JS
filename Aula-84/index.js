// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos do array original dependo do filtro.



// Retorne os números maiores que 10
const numeros = [5, 10, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

/*
function callbackFilter(valor){
   return valor < 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados)

*/

// Função de callback com filter 
 const numerosFiltrados = numeros.filter(valor => valor < 10);
 console.log(numerosFiltrados)






// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a


const pessoas = [
 { nome: 'Luiz', idade: 62},
 { nome: 'Maria', idade: 23},
 { nome: 'Eduardo', idade: 55},
 { nome: 'Leticia', idade: 19},
 { nome: 'Rosana', idade: 32},
 { nome: 'Wallace', idade: 47},
];

// filtrando string com mais de 5 caracteres : Modelo da função : "simplificada" arrowFunction 
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande)

// filtrando idade >= 50 : Modelo da função : "simplificada" arrowFunction 
const pessoasComMaisIdade = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasComMaisIdade)

// filtrar string que termina com caracter 'a' : Modelo da função : Padrão
// método toLowerCase() : diminui os caracteres
// método endsWith() : exemplo : "termina com o caracter 'a' "
const pessoasCaracter = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasCaracter)





