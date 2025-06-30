// Entarda de dados
const readline = require('readline-sync');

// Lê os números
const n1 = readline.question("Número 1: ");
const n2 = readline.question("Número 2: ");
const n3 = readline.question("Número 3: ");
const n4 = readline.question("Número 4: ");

// Calcula a diferença
const diferenca = (n1 * n2) - (n3 * n4);

// Exibe a diferença
console.log("Diferença:", diferenca);