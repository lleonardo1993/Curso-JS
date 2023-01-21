// Capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Evento prevenido.")
    setResultado("ola mundo?")
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado')
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);

}