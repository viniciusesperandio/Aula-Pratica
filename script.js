let titulo = document.querySelector('h1');
let subtitulo = document.querySelector('h2');
let texto = document.querySelector('p');


function mudarTitulo() {
  titulo.innerHTML = 'Sua cidade';
  titulo.style.color = '#E1E1E1';
  titulo.style.backgroundColor = 'black';
  titulo.style.width = 'auto';
}

function corTexto(){
  subtitulo.style.color = '#E1E1E1';
  subtitulo.style.backgroundColor = 'black';
  subtitulo.style.width = '155px';
}

function mudarTexto() {
  texto.style.color = '#E1E1E1';
  texto.style.backgroundColor = 'black';
}

function init(){
  document.getElementById("img1").style.display = "block";
  document.getElementById("img2").style.display = "block";
  document.getElementById("img3").style.display = "block";
}



