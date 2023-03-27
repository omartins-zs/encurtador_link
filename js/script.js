function encurtarUrl() {
  // Validar se o link existe
  var url = document.getElementById("input-url").value;
  if (!url) {
    alert("É preciso inserir uma URL para encurtar");
    return;
  }
}

