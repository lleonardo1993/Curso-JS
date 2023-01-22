//Funções Recursivas

// Determina um limite na própria função, ela mesmo se chama "loop"
function recursiva(max){
    console.log(max);
    if(max >= 10) return
    max++;
    recursiva(max)
}
recursiva(0);