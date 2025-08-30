let diaSemana = 1;
let nomeDia;

switch (diaSemana){
    case 1:
        nomeDia = 'segunda-feira';
        break;
    case 2:
        nomeDia = 'terça-feira';
        break;
    case 3:
        nomeDia = 'quarta-feira';
        break;
    case 4:
        nomeDia = 'quinta-feira';
        break;
    case 5:
        nomeDia = 'sexta-feira';
        break;
    case 6:
        nomeDia = 'sábado';
        break;
    case 7:
        nomeDia = 'domingo';
        break;
    default:
        nomeDia = 'dia inválido';
}
console.log(nomeDia);