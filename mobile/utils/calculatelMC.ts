export function calculateIMC(peso: number, altura: number) {
  if (!peso || !altura || peso <= 0 || altura <= 0) {
    throw new Error("Por favor, insira valores válidos para peso e altura.");
  }

  const imc = peso / (altura * altura);

  let classificacao = "";
  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 24.9) classificacao = "Peso normal";
  else if (imc < 29.9) classificacao = "Sobrepeso";
  else if (imc < 34.9) classificacao = "Obesidade grau I";
  else if (imc < 39.9) classificacao = "Obesidade grau II";
  else classificacao = "Obesidade grau III";

  return { imc: imc.toFixed(2), classificacao };
}
