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

const listaRepositorios = document.getElementById('lista-repositorios')

async function buscarRepositorios (){
    try{
        const resposta = await fetch('https://api.github.com/users/FelipeEN/repos')

        const repositorios = await resposta.json()

        listaRepositorios.innerHTML=''

        repositorios.forEach(repo =>{
          const projeto = document.createElement('article')  

          projeto.classList.add('repositorio')

          projeto.innerHTML= `
                <h3>${repo.name}</h3>
                <p> descrição: ${repo.description || 'sem descrição' } </p>
           
                <p> linguagem : ${repo.language || 'não informado' } </p>
                <a href= ${repo.html_url} target = "_blank"> 
                    Ver no GitHub
                </a>
            `

            listaRepositorios.appendChild(projeto)


        })

    }catch(erro){
        console.log(erro)
        listaRepositorios.innerHTML= ` 
            <p>
                Não foi possivel carregar os repositorios.
            </p>
         `

    }
}
 buscarRepositorios ()