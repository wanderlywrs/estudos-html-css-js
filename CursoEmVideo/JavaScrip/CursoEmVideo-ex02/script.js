function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert(`[ERRO] Verifique os dados e tente novamente`);
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 5) {
        //Criança
        img.setAttribute("src", "img/bebe_menino.png");
      }else if(idade <10){
        img.setAttribute("src", "img/garoto.png");
      } else if (idade < 18) {
        //Adolecente
        img.setAttribute("src", "img/adolecenteh.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "img/adultoh.png");
      } else {
        //Idoso
        img.setAttribute("src", "img/velho.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 5) {
        //Criança
        img.setAttribute("src", "img/bebe_menina.png");
      } else if(idade <10){
        img.setAttribute("src", "img/garota.png");
      }else if (idade < 18) {
        //Adolecente
        img.setAttribute("src", "img/garota.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "img/adultom.png");
      } else {
        //Idoso
        img.setAttribute("src", "img/velha.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
  }
}
