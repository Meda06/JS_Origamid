// Adicione a classe ativo a todos os itens do menu
const ativo = document.querySelectorAll('.menu a')
ativo.forEach((item)=>{
  item.classList.add('ativo')
  console.log(item)
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
ativo.forEach((item,index)=>{
  if(index !== 0 )(
    item.classList.remove('ativo')
  )
  console.log(item)
})

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((item)=>{
  if(item.hasAttribute('alt')){
    console.log('Tem elemento alt')
  }else{
    console.log('Não tem elemento alt')
  }
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelectorAll('.menu li a')

linkExterno.forEach((item)=>{
  let site = (item.getAttribute('href'))
  if(site.includes('https')){
    item.setAttribute('href','www.origamid.com/mudado')
  }
})

const link = document.querySelector('a[href^="http"]')

// link.setAttribute('href',)

