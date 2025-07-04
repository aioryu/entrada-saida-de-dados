//Entrada de dados - Prova 3
const readline = require('readline-sync');

// Lê os dados do funcionário
const salarioBruto = readline.question("Salário Bruto: ");
const adicionalNoturno = readline.question("Adicional Noturno: ");
const horasExtras = readline.question("Horas Extras: ");
const descontos = readline.question("Descontos: ");

// Calcula o salário líquido
const salarioLiquido = salarioBruto * 1 + adicionalNoturno * 1 + (horasExtras * 1 * 5) - descontos * 1;

// Exibe o salário líquido
console.log("Salário Líquido:", salarioLiquido);