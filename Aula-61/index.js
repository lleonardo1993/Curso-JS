const Paisagem = true;

function ePaisagem(altura, largura){
    if(altura > largura){
        return true;
    }else{
        return false;
    }
}
//console.log(ePaisagem(1100, 200))

const ePaisa = (altura, largura) => altura > largura ? true : false;

console.log(ePaisa(20, 110))