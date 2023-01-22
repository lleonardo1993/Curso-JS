//Funções geradoras
// executa interando por cada linha pausadamente;

function* geradora1(){
    //Código qualquer
    yield 'Valor1';
    //Código qualquer
    yield 'Valor2';
    //Código qualquer
    yield 'Valor3';
}

function* geradara2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}
const g2 = geradara2();
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
}
const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
};

function* geradora5(){
    yield function(){
        console.log('yield 1');
    };
    yield function(){
        console.log('yield 2');
    };
};
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();


