// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita envio do form

  const nome = frm.inNome.value; // obtém valores do form
  const masc = frm.inMasculino.checked;
  const altura = Number(frm.inAltura.value);

  //let peso;
  // if (masc) {
  //   peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
  // } else {
  //   peso = 21 * Math.pow(altura, 2);
  // }

  //Operador ternário
  const peso = masc ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);
  // apresenta a resposta (altera o conteúdo do elemento h3 da página)
  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} Kg.`;
  resp.style.color = 'green'
});

frm.addEventListener("reset", () => {
  resp.innerText = ""; // limpa o conteúdo do elemento h3 que exibe a resposta
});
