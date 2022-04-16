function mostraralerta() {
  alert("hizo clic 2!");
}
function hacerclic() {
  // document.querySelector("#principal p:first-child").onclick="mostraralerta";
  var elemento = document.getElementsByTagName("p")[0];
  //Addeventlistener html5
  elemento.addEventListener('click', mostraralerta, false);
  //   lista[0].onclick = mostraralerta;
}


window.onload = hacerclic;
