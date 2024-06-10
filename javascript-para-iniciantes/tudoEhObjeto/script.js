// nomeie 3 propriedades ou métodos de strings
let nome = 'Gabriel'
nome.length
nome.toLowerCase().split('').sort()

// nomeie 5 propriedades ou métodos de elementos do DOM
// document.addEventListener()
// document.querySelector()
// document.append()
// document.exitFullscreen
// document.styleSheets


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function getPasteData(e) {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    console.log(pastedData);
  }