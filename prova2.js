// Entrada de dados
const readline = require('readline-sync');

// Lê as notas do aluno
const nota1 = readline.question("Nota 1: ");
const nota2 = readline.question("Nota 2: ");
const nota3 = readline.question("Nota 3: ");
const nota4 = readline.question("Nota 4: ");

// Calcula a média final
const media = (nota1 * 1 + nota2 * 1 + nota3 * 1 + nota4 * 1) / 4;

// Exibe a média final
console.log("Média final:", media);