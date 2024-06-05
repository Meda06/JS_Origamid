// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 28;
var idadeParente = 40;
if(minhaIdade > idadeParente){
    console.log(`${minhaIdade} é maior do que ${idadeParente}` )
}else if(minhaIdade === idadeParente){
    console.log(`${minhaIdade} é igual ${idadeParente}` )
}
else{
    console.log(`${minhaIdade} é menor do que ${idadeParente}`)
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//false
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome,!!idade,possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil <= china){
    console.log("China tem mais habitantes")
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Falso gato diferente de Gato


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

