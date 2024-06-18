const img = document.querySelector('img')

function callback(event){
  console.log(event);
}

// img.addEventListener('click',callback);

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}


animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(e) {
  e.preventDefault()
  console.log(e.currentTarget)
}

linkExterno.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1');

function handleEvent(event){
  console.log(event,event.type)
}


h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter',handleEvent);

window.addEventListener('scroll',handleEvent)
window.addEventListener('resize',handleEvent)
window.addEventListener('keydown', handleEvent);


