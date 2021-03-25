let cpf = '705.484.450-52';

function clearCpf(cpf) {
  return cpf.replace(/\D+/g, '');
}

function arrayCpf(cpf) {
  return Array.from(cpf);
}

function cpfSizeValidation(size) {
  return size !== 11;
}

function cpfValidation(cpfNumbers, cpfDigits, cont = 10) {
  if (cpfSizeValidation(cpfDigits.length + cpfNumbers.length)) return 'CPF Inválido';

  let ac = 0;

  cpfNumbers.forEach(el => {
    ac += el * cont
    cont--;
  });

  let digit = cpfDigits.shift();

  cpfNumbers.push(digit);
  
  let res = (11-(ac%11)) > 9 ? 0 : (11-(ac%11));

  if (Number(digit) !== res)  return 'CPF Inválido';
  
  if(cpfDigits) cpfValidation(cpfNumbers, cpfDigits, 11);

  return 'CPF válido';
}

cpf = arrayCpf(clearCpf(cpf));

let cpfNumbers = cpf.slice(0, 9);
let cpfDigits = cpf.slice(9, 11);

const result = cpfValidation(cpfNumbers, cpfDigits);
console.log(result);