import Geradores from './Geradores';

class GeraSenha {
  geraNovaSenha(charQtd = 8, numeros, maiuscula, minusculas, simbolos) {
    let senha = '';

    while(senha.length < charQtd) {
      if(numeros) senha += Geradores.geraNumero();
      if(maiuscula) senha += Geradores.geraMaiuscula();
      if(minusculas) senha += Geradores.geraMinuscula();
      if(simbolos) senha += Geradores.geraSimbolo();
    }

    return senha.slice(0, charQtd);
  }
}

export default new GeraSenha;