// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anosCopaBrasil = ['1959','1962','1970','1994','2002']

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i=0; i<anosCopaBrasil.length;i++){
    console.log(`O brasil ganhou a copa de ${anosCopaBrasil[i]}`)
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var frutadif;
for(let i=0; i < frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === "Pera"){
        frutadif = frutas[i];
        break
    }
}

console.log(frutadif);

var ultimaFruta = frutas[frutas.length - 1]
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.


