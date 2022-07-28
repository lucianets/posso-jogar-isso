const elementoListaJogos = document.getElementById('lista-jogos')

const formaListaJogos = async () => {
  try {
    const response = await fetch("https://my-json-server.typicode.com/lucianets/games/games")
    const jogos = await response.json()

    jogos.forEach(jogo => {
      elementoListaJogos.innerHTML += `
          <div class="card">
            <div class="box">
              <div class="content">
                <p class="conteudo-principal-escrito-titulo">${jogo.nome}</p>
                <img class="img-jogo content" src="${`../assets/img/img-games/${jogo.imagem || 'padrao.png'}` }" alt="jogo">
                <ul>
                  <li class="conteudo-texto">Plataforma: ${jogo.plataforma} </li>
                  <li class="conteudo-texto">Tipo: ${jogo.tipo} </li>
                  <li class="conteudo-texto">Ano: ${jogo.ano} </li>
                </ul>
                <a href="${jogo.link}" target="_blank">Link</a>
              </div>
            </div>
          </div>
        `
    })

  } catch (error) {
    console.error(error)
    return []
  }
}

formaListaJogos()

campoBusca = document.getElementById("txtBusca")

const fazBusca = () => {
  let cards = document.querySelectorAll('.card')
  let valorBusca = campoBusca.value;

  cards.forEach(card => {
    if (card.innerText.toLowerCase().includes(valorBusca.toLowerCase())) {
      card.classList.remove("oculto");
    } else {
      card.classList.add("oculto");
    }
  })
}

const btnBusca = document.getElementById('btnBusca')
btnBusca.addEventListener('click', () => {
  fazBusca()
})