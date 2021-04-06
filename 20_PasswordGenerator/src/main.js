import GeraSenha from './modules/GeraSenha';

import './assets/css/styles.css';

(function() {
  document.addEventListener('click', (e) => {
    const el = e.target;

    const maiusculas = document.querySelector('.chk-maiusculas').checked;
    const minusculas = document.querySelector('.chk-minusculas').checked;
    const numeros = document.querySelector('.chk-numeros').checked;
    const simbolos = document.querySelector('.chk-simbolos').checked;
    
    const charQtd = document.querySelector('.qtd-caracteres').value;

    const senhaGerada = document.querySelector('.senha-gerada');

    if(!numeros && !maiusculas && !minusculas && !simbolos) {
      senhaGerada.innerText = "Selecione alguma opção";
    } else if(el.classList == 'gerar-senha') {
      senhaGerada.innerHTML = GeraSenha.geraNovaSenha(charQtd, numeros, maiusculas, minusculas, simbolos);
    }
  });

})();
