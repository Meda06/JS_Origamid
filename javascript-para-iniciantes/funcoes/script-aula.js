function areaQuadrado(lado){
  return lado*lado;
}

console.log(areaQuadrado(10));

function pi(){
  return 3.14;
}

var total = 5*pi();
console.log(pi())

function imc(peso,altura){
  const imc = peso/(altura**2)
  return imc;
}

function corFavorita(cor){
  if(cor === "Azul"){
    return 'Eu gosto do céu'
  }else if(cor === 'verde'){
    return 'Eu gosto de mato'
  }else{
    return 'Eu não gosto de cores';
  }
}

function mostraConsole(){
  console.log('oi')
}

addEventListener('click', mostraConsole)

function imc2(peso,altura){
  const imc =peso/(altura**2)
  console.log(imc)
}

imc2(20,1.80)

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Preencha um número';
  }else if(idade >= 60){
    return true
  }else {
    return false;
  }
}

console.log(terceiraIdade(60))


function faltaVisitar(paisesVisitados){
  var totalPaies = 193;
  return `Faltam visitar ${totalPaies-paisesVisitados} países` 
}

console.log(faltaVisitar(20))

var profissao = 'Desinger'

profissao

console.log(dados())

function dados(){
  var nome = 'André';
  var idade =  28;
  function outrosDados(){
    var endereco = 'Rio de Janeiro'
    var idade =29
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}

profissao.