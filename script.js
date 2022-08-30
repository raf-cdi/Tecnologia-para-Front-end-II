let altura = [];
let hm = 0;
let mulheres = 0;
let divisor = 0;


for(var i = 0; i < 15; i++){
    let a = parseFloat(prompt('Informe sua altura em cm:'));
    altura.push(a);
    let s = prompt('Informe seu sexo (h/m): ');
    if (s == "h"){
        hm += a;
        divisor++;
    }
    else if (s == "m"){
        mulheres++;
    }
}

if(hm != 0){
    console.log(`A média de altura dos homens é: ${hm/divisor}cm.`)
}

altura.sort();

console.log(`A pessoa mais baixa mede: ${altura[0]}cm, e a pessoa mais alta mede: ${altura[i-1]}cm. }`);
console.log(`O grupo possui ${mulheres} mulheres`);


// - Pedir dados de 15 pessoas;
// - A maior e a menor altura do grupo;
// - A média de altura dos homens;
// - O número de mulheres.