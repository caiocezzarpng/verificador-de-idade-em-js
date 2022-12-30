function verificarIdade() {
  var ano = Number(document.getElementById("ano").value);
  var sexo;
  if (document.getElementById("homem").checked) {
    var sexo = document.getElementById("homem").value;
  } else if (document.getElementById("mulher").checked) {
    var sexo = document.getElementById("mulher").value;
  }

  var dataAtual = new Date();
  anoAtual = dataAtual.getFullYear();

  var idade = anoAtual - ano;

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Detectamos " + sexo + " de " + idade + " anos.";

  chamarImagem(sexo, idade);
}

function chamarImagem(sexo, idade) {
  if (sexo === "Homem" && idade < 18) {
    document.getElementById("img").src = "img/img-garoto.jpg";
    document.getElementById("img").style.visibility = "visible";
  } else if (sexo === "Homem" && idade < 50) {
    document.getElementById("img").src = "img/img-homem.jpg";
    document.getElementById("img").style.visibility = "visible";
  } else if (sexo === "Homem") {
    document.getElementById("img").src = "img/img-homem-velho.jpg";
    document.getElementById("img").style.visibility = "visible";
  } else if (sexo === "Mulher" && idade < 18) {
    document.getElementById("img").src = "img/img-garota.jpg";
    document.getElementById("img").style.visibility = "visible";
  } else if (sexo === "Mulher" && idade < 50) {
    document.getElementById("img").src = "img/img-mulher.jpg";
    document.getElementById("img").style.visibility = "visible";
  } else if (sexo === "Mulher") {
    document.getElementById("img").src = "img/img-mulher-velha.jpg";
    document.getElementById("img").style.visibility = "visible";
  }
}
