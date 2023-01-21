// escreva uma funcao que retorne o maior numero

// expressao lambia js funcão
const maior = (x, y) => x > y ? x : y;

console.log(maior(100, 200));

//funcao comum js
function maior2(x, y) {
    if(x > y){
        return x;
    }else{
        return y;
    }
}
console.log(maior2(44, 333))