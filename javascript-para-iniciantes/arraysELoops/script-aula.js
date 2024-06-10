var videoGames = ['Switch','PS4','XBOX','3DS'];

// var ultimoImte = videoGames.pop(); remove o ultimo item e retorna ele

// videoGames.push('3DS'); adiciona ao final do array

for(var numero = 0; numero < 4; numero++){
    console.log(numero+1)
}

var i = 0
while(i<2){
    console.log(i);
    i++;
}


for(let i=0; i<videoGames.length;i++){
    console.log(videoGames[i])
}

for(let i=0; i< videoGames.length;i++){
    console.log(videoGames[i])
    if(videoGames[i] === 'PS4'){
        break
    }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi','Uva'];

frutas.forEach(function(fruta, index, array){
    console.log(fruta, index, array)
})

//Foreach é um método que executa uma função para cada item da Array. É uma forma mias simples de utilizarmos um loop com arrays(ou array like)

