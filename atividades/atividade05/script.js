let nota01 = Number(prompt("Informe sua 1° nota"));
let nota02 = Number(prompt("Informe sua 2° nota"));
let nota03 = Number(prompt("Informe sua 3° nota"));
let nota04 = Number(prompt("Informe sua 4° nota"));

let media = (nota01 + nota02 + nota03 + nota04) / 4;

if (media >= 7) {
  alert("Você foi aprovado com a média: " + media);
} else {
  alert("Você foi reprovado com a média: " + media);
}
