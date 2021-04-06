const simbolos = '|!@#$%&*()-_+=,.;][{}:><?';

class Geradores {
  geraNumero(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  geraSimbolo() {
    return String(simbolos[this.geraNumero(0, simbolos.length)]);
  }

  geraMaiuscula() {
    return String.fromCharCode(this.geraNumero(65, 91));
  }

  geraMinuscula() {
    return String.fromCharCode(this.geraNumero(97, 123));
  }
}

export default new Geradores;