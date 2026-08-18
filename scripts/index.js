const btnTheme = document.getElementById('theme_page')

btnTheme.addEventListener( 'click', ()=>{

    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        btnTheme.textContent = 'Modo-Claro'
    }else{
         btnTheme.textContent = 'Modo-Escuro'
    }

})