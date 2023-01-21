/**
 *  && -> false && true -> false "o valor mesmo" 
 * || -> true && false -> vai retornar "o valor verdadeiro"
 * 
 * 
 * Falsy 
 * false
 * 0 
 * '' "" ```
 * null NaN 
 * undefined
 * 
 * 
 */

//console.log('Luiz' && 'Maria');

function falaOi(){
    return 'Oi'
}

let vaiExecutar = 'Joaozinho';

console.log(vaiExecutar && falaOi());

const corUsuario = 'preto'
const corPadrao = corUsuario || 'vermelho'

console.log(corPadrao);