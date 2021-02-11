const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const peso = Number(document.querySelector('#peso').value);
  const altura = Number(document.querySelector('#altura').value);

  if (!peso || peso < 0) return setResultado('Verifique o peso informado', 'warning');
  if (!altura || altura < 0) return setResultado('Verifique a altura informada', 'warning');

  const imc = calculaImc(peso, altura);
  const result = verificaNivel(imc);

  const msg = `Seu IMC é: ${result.Imc}, ${result.Resultado}`;

  setResultado(msg, result.Classe);
});

function calculaImc(peso, altura) {
  const imc = peso / (altura * altura);

  return imc;
}

function verificaNivel(imc) {
  if (imc < 18.5) return { Imc: imc.toFixed(2), Resultado: 'Abaixo do peso', Classe: '' };
  else if (imc < 25) return { Imc: imc.toFixed(2), Resultado: 'Peso Normal', Classe: '' };
  else if (imc < 30) return { Imc: imc.toFixed(2), Resultado: 'Sobrepeso', Classe: 'warning' };
  else if (imc < 35) return { Imc: imc.toFixed(2), Resultado: 'Obesidade grau 1', Classe: 'bad' };
  else if (imc < 40) return { Imc: imc.toFixed(2), Resultado: 'Obesidade grau 2', Classe: 'bad' };
  else return { Imc: imc.toFixed(2), Resultado: 'Obesidade grau 3', Classe: 'bad' };
}

function criaParagrafo() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, classe) {
  const resultado = document.querySelector('#resultado');

  resultado.innerHTML = '';

  const p = criaParagrafo();

  p.classList.add(`paragrafo-resultado`);

  if (classe) p.classList.add(classe);

  p.innerHTML = msg;
  resultado.appendChild(p);
}
