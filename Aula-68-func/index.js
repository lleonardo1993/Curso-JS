
const SouUmDado = function(){
    console.log("Sou um dado.")
}

function executaFuncao(funcao){
    console.log("Vou executar essa funcao");
    funcao();
}
executaFuncao(SouUmDado);


// funcao decrada com a palavra function ou a function express tem um parametro arguments que sustenta todos
// os argumentos enviados.
 
function funcao(){
    total = 0;
    for(let argumento of arguments){
        total += argumento;
    }

   console.log(total) 
}
funcao(1, 2, 3, 4, 5);