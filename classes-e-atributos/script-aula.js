const menu = document.querySelector('.menu');

menu.classList.add('ativo','teste')
menu.classList.remove('azul')

if(menu.classList.contains('azul')){
  menu.classList.add('possuiAzul');
}else{
  menu.classList.add('naoPossuiAzul')
}

// menu.className +=  ` ativo`

console.log(menu.className)

// console.log(menu.classList.add);


const animais = document.querySelector('.animais');

console.log(animais.attributes)

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt')


img.setAttribute('alt','É uma raposa')
const possuiAlt = img.hasAttribute('alt');

console.log(srcImg);

const carro = {
  portas: 4,
  andar(km){
    console.log(`Andou ${km}`)
  }
}
