const prompt = require('prompt-sync')();

// matriz 3x3
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let opcao = 0;

while (opcao !== 4) {

  console.log("\nMatriz:");
  for (let i = 0; i < 3; i++) {
    console.log(matriz[i]);
  }

  console.log("\n1 - Somatório da linha 1");
  console.log("2 - Multiplicação da diagonal");
  console.log("3 - Quantidade de números pares");
  console.log("4 - Encerrar");

  opcao = Number(prompt("Escolha uma opção: "));

  if (opcao === 1) {
    let soma = 0;
    for (let j = 0; j < 3; j++) {
      soma += matriz[0][j];
    }
    console.log("Somatório da linha 1:", soma);

  } else if (opcao === 2) {
    let multiplicacao = 1;
    for (let i = 0; i < 3; i++) {
      multiplicacao *= matriz[i][i];
    }
    console.log("Multiplicação da diagonal:", multiplicacao);

  } else if (opcao === 3) {
    let pares = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matriz[i][j] % 2 === 0) {
          pares++;
        }
      }
    }
    console.log("Quantidade de pares:", pares);

  } else if (opcao === 4) {
    console.log("Encerrando programa...");

  } else {
    console.log("Opção inválida!");
  }
}