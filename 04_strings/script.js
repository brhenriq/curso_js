const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem: ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda Letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `O primeiro índice da letra "a" é: ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `O último índice da letra "a" é ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As 3 últimas letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minuúsculas: ${nome.toLowerCase()} <br />`;