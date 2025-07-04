// Entrada e Saída de Dados - Prova 1
const readline = require('readline-sync');

// Lê o salário
const salario = readline.question("Digite o salário: ");

// Lê o abono
const abono = readline.question("Digite o abono: ");

// Calcula o novo salário
const novoSalario = salario * 1 + abono * 1;

// Exibe o novo salário
console.log("Novo Salário:", novoSalario);