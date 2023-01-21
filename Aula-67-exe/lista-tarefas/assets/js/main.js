const inputTarefe = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi(){
  const li = document.createElement('li');
  return li;
}

inputTarefe.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    if(!inputTarefe.value) return;
    criaTarefa(inputTarefe.value)
  }
});

function limpaInput(){
  inputTarefe.value ='';
  inputTarefe.focus();
}

function criaBotaoApagar(li){
  li.innerHTML += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerHTML = 'Apagar';
  //botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar está tarefa');
  li.appendChild(botaoApagar);
}

function criaTarefa(texotInput){
  const li = criaLi();
  li.innerHTML = texotInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefa();
}

btnTarefa.addEventListener('click', function(e){
  if(!inputTarefe.value) return;
  criaTarefa(inputTarefe.value)
});

document.addEventListener('click', function(e){
  const el = e.target;

  if(el.classList.contains('apagar')){
    el.parentElement.remove();
  }
  salvarTarefa()
});

function salvarTarefa(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for(let tarefa of liTarefas){ 
    
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);

  }
  
  const tarefaJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefaJson);
  
}

function adicionarTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
  }
  console.log(listaDeTarefas);
}
adicionarTarefasSalvas()
