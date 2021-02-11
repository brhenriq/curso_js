const form = document.querySelector('.form');

function novoCadastro() {
  const result = document.querySelector('.result');

  const pessoas = [];

  form.addEventListener('submit', (e) => {
     e.preventDefault(); 
     
     const dados = coletarDados();
     
     pessoas.push(dados);

     console.log(pessoas);
     
     result.innerHTML += `<p>${dados.Nome} ${dados.Sobrenome}, ${dados.Peso}Kg, ${dados.Altura}</p>`;
    });
}

function coletarDados() {
  const nome = form.querySelector('.nome');
  const sobrenome = form.querySelector('.sobrenome');
  const peso = form.querySelector('.peso');
  const altura = form.querySelector('.altura');

  const pessoa = {
    Nome: nome.value,
    Sobrenome: sobrenome.value,
    Peso: peso.value,
    Altura: altura.value
  };

  return pessoa;
}

novoCadastro();