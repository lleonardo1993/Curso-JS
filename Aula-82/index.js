// Função splice();

//               -5       -4       -3        -2       -1
//                0        1        2         3        4
const nomes = ['Maria', 'Joao', 'Marcelo', 'Julia', 'Luiz'];


// Unshift
nomes.splice(2, 0, 'Fernando');
console.log(nomes);

// SINTAX
//nomes.splice(indice atual, delete, elem1, elem2, elem3);

// pop

// const removidos = nomes.splice(-1, 1)

//console.log(removidos)

//Shift
//const removidos = nomes.splice(0, 1);

