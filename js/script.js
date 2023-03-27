function encurtarUrl() {
    // Validar se o link existe
    var url = document.getElementById("input-url").value;
    if (!url) {
        alert("É preciso inserir uma URL para encurtar");
        return;
    }

    // api kay: 0cf2c0584ca444eeb382ce938f875d40

    // Encurtar link

    // Headers
    let headers = {
        "Content-Type": "application/json",
        apiKey: "0cf2c0584ca444eeb382ce938f875d40",
    };

    // Dados
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" },
    };

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    // Usando Template String para mostrar alert
    alert(`Url copiada: ${inputUrl.value}`);
}