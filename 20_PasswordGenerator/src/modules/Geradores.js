const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const simbolos = ['|', '!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '+', '=', ',', '.', ';', ']', '[', '{', '}', ':', '>', '<', '?'];

class Geradores {
  geraNumero(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  geraSimbolo() {
    const num = this.geraNumero(0, simbolos.length);
    return String(simbolos[num]);
  }

  geraMaiuscula() {
    const num = this.geraNumero(0, letras.length);
    return String(letras[num].toUpperCase());
  }

  geraMinuscula() {
    const num = this.geraNumero(0, letras.length);
    return String(letras[num].toLowerCase());
  }
}

export default new Geradores;