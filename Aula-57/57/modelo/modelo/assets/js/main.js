const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);

const backgroudColorBody = estiloBody.backgroundColor;


for ( let p of ps) {
    p.style.backgroundColor = backgroudColorBody;
    p.style.color = "#FFFF"
    console.log(p)
}