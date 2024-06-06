// Crie uma função para verificar se um valor é Truthy

console.log(valorTruthy())

function valorTruthy(valor){
  if(!!valor === true){
    return ("É Truthy")
  }
  else{
    return ("É falsy")
  }

}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

console.log(perimetro(5))

function perimetro(lado){
  var total = lado * 4
  return total;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
console.log(nomeCompleto("Gabriel","Medeiros Gomes da Silva"))

function nomeCompleto(nome, sobrenome){
  return nome+" "+sobrenome
}

// Crie uma função que verifica se um número é par
console.log(ePar(32132132))

function ePar(n){
  if(n%2 === 0){
    return ("É par")
  }
  else{
    return("É ímpar")
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
console.log(qualType())

function qualType(item){
  return typeof(item)
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
  console.log("Gabriel Medeiros Gomes da SIlva")
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));

console.log(jaVisitei(20));