// Retorne no console todas as imagens do site
const Imagens = document.querySelectorAll('img')
console.log(Imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavaImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(palavaImagem)

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('a[href^="#"]')
console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)
const ultimoP = document.querySelector('p:last-child')
console.log(ultimoP)

console.log(paragrafos[--paragrafos.length])
