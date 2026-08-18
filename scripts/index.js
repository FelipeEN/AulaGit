const { createElement } = require("react")

const btnTheme = document.getElementById('theme_page')

btnTheme.addEventListener( 'click', ()=>{

    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        btnTheme.textContent = 'Modo-Claro'
    }else{
         btnTheme.textContent = 'Modo-Escuro'
    }

})


const btnNumero = document.getElementById('numero')
const btnContador = document.getElementById('btnContador')

let contador = 0;
btnContador.addEventListener('click', ()=>{
    
    contador ++

    btnNumero.textContent = contador

})

