var pessoa = { 
    nome:'André',
    idade:28,
    profissao:'Designer',
    possuiFaculdade:true,
}

 var quadrado = {
    lados:4,
    area(lado){
        return lado * lado;
    },
    // perimetro: function(lado){
    //     return lado * this.lados
    // }
    perimetro(lado){
        return lado * this.lados
    }
 }

 console.log(quadrado.area(5))
 console.log(quadrado.perimetro(5))


console.log(Math.random())

var height=100;

var menu = {
    width:800,
    height:50,
    backgroundColor:'#84E',
    metadeHeight(){
        return this.height/2;
    }
}

//objeto tem herança d

//.this referencia ao proprio objeto

menu.backgroundColor = '#000'


menu.esconder = function(){
    console.log('Escondi')
}

var bg = menu.backgroundColor;

