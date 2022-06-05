function listarPontos() {
    fetch("http://localhost:3000/pontos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        lista = document.getElementById("pontos");
        // Considerando que data é um array de objetos
        // Ao final desse map, temos uma lista de elementos
        pontosRecarregados = data.map((ponto) => {
          const ponto = document.createElement("pre");
          ponto.textContent = JSON.stringify(ponto);
          return ponto;
        });
        // E vamos "substituir" o conteúdo da lista
        lista.replaceChildren(...pontosRecarregados);
      });
  }