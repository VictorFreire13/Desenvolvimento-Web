let frutas = ["Maça", "Laranja", "Banana"];

let Nomes = new Array("Adenor", "Bira", "Juscelino");
Nomes.push("maya");
Nomes.pop();
//for(let i = 0; i<Nomes.length;i++){
//console.log(Nome[i]);
//}
//Nomes.forEach(Nomes => console.log(Nomes));
Nomes.map(Nomes => console.log(Nomes));
Nomes.filter(n => console.log(n == 'Adenor'))