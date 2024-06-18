// Verifique a distância da primeira imagem
// em relação ao topo da página

const distanciaTopoImg = document.querySelector('img')
console.log(distanciaTopoImg.offsetTop)

// Retorne a soma da largura de todas as imagens
function somaImagens(){
const todasImgs = document.querySelectorAll('img')
let soma = 0
todasImgs.forEach((img)=>{
  soma += img.offsetWidth
})
console.log(soma)
}
window.onload = function(){
  somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
todasOsLinks = document.querySelectorAll('a')
todasOsLinks.forEach((link)=>{
  if(link.offsetWidth >= 48 && link.offsetHeight >= 48){
    console.log(link, "Possui o minimo")
  }
  else{
    console.log(link, "Não possui o minimo")
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

//const browserSmall = window.matchMedia('(max-width:720px)').matches

browserWidth = window.innerWidth
if(browserWidth <= 720){
  menu = document.querySelector('.menu').classList.add('menu-mobile')

}
