const nome = 'Bruno Henrique';
const sobrenome = 'Santos';
const idade = 21;
const peso = 115;
const altura = 1.84;
let imc;
let anoNascimento;

imc = (peso / (altura * altura));
anoNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg,`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc},`);
console.log(`${nome} nasceu em ${anoNascimento}.`);