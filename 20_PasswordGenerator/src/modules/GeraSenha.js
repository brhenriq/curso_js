import Geradores from './Geradores';

class GeraSenha {
  geraNovaSenha(charQtd = 8, numeros = true, maiuscula = true, minusculas = true, simbolos = true) {
    let senha = '';

    while(senha.length <= charQtd-1) {
      if(numeros && senha.length <= charQtd-1) senha += Geradores.geraNumero();
      if(maiuscula && senha.length <= charQtd-1) senha += Geradores.geraMaiuscula();
      if(minusculas && senha.length <= charQtd-1) senha += Geradores.geraMinuscula();
      if(simbolos && senha.length <= charQtd-1) senha += Geradores.geraSimbolo();
    }

    return senha;
  }
}

export default new GeraSenha;