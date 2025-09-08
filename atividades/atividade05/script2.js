let num1 = Number(prompt("Digite um numero:"));
let num2 = Number(prompt("Digite um numero:"));
let operacao = prompt("Fale qual operação vc deseja usar");
if (operacao === "adição"){
 let resultado = num1 + num2
 alert("o resultado é "+ resultado);

}
else if (operacao === "subtração"){
 let resultado = num1 - num2
 alert("o resultado é "+ resultado);

}
else if (operacao === "multiplicação"){
 let resultado = num1 * num2
 alert("o resultado é "+ resultado);

}
else if (operacao === "divisão"){
 let resultado = num1 / num2
 alert("o resultado é "+ resultado);

}
else {

    alert("tente novamente")
}
