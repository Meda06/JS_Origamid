var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao){
    console.log('Possui Graduação');
    var x = 10;
}else if(possuiDoutorado){
    console.log('Possui doutorado');
}else{
    console.log('Não possui nada')
}


var nome = '10kg'/10;

if(nome){
    console.log(nome);
}else{
    console.log('Nome não existe');
}

if(!possuiGraduacao){
    console.log('Não possui graduação')
}

if((5 - 5)&&(5+5)){
    console.log('Verdadeiro')
}
else{
    console.log('Falso');
}
var condicional = (5 - 10)&&(5+5);
if(condicional){
    console.log(condicional)
}
else{
    console.log('Falso');
}

var condicional2 = (5-5) || (5+5) || (10-2);
console.log(condicional2)

var corFavorita = 'Verde';

switch(corFavorita){
    case 'Azul':
        console.log('Olhe para o céu.')
        break
    case 'Amarelo':
        console.log('Olhe para o sol')
        break
    case 'Verde':
        console.log('Olhe para a floresta.')
        break
    default:
        console.log('Feche os olhos.')
}

//Falsy 
/* 
if(false)
if(0)
if(NaN)
if(null)
if(undefined)
if('') ou "" ou ``
*/ 

//Truth 
/* 
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({}) 
*/ 

//! nega a operação

'Gato' && 'Cão' ;//'Cão'

(5-5) && (5+5) // 0

