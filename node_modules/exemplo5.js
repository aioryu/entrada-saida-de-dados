const readline = require("readline-sync");

let cor = readline.question('Digite uma cor: ')
  switch (cor) {
    case 'azul':
      console.log('Cor fria');
      break;
    case 'vermelho':
      console.log('Cor quente');
      break;
    default:
      console.log('Cor desconhecida');
  }