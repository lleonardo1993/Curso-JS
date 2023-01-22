// Funções construtoras

function Calculadora(){
  this.display = document.querySelector('.display');

  // Função Inicia o Projeto
  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if(e.key !== 'Enter') return;
      this.realizaConta();
    })
  }

  // Evento que captura os cliques
  this.capturaCliques = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if(el.classList.contains('btn-num')) this.addNumDisplay(el);
      if(el.classList.contains('btn-clear')) this.clear();
      if(el.classList.contains('btn-del')) this.del(el);
      if(el.classList.contains('btn-eq')) this.realizaConta(el);
    });
  };

  //Função Valida Conta
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta){
        alert('Conta inválida');
        return
      }

      this.display.value = conta;
    } catch (e){
      alert('Conta inválida');
       return
    }
  }

  
  // Função Adiciona Numero no display
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  // Função Limpa o campo
  this.clear = () => this.display.value = '';  

  // Função Remove o numero do display
  this.del = () => this.display.value.slice(0 -1);

  //Função

}

const calculadora = new Calculadora();
calculadora.inicia();