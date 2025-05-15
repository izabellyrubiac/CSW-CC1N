function abrepagina()
{
    window.open("aula19.html", "_blank");
}

function enviadados()
{
    document.getElementById("inputusuario").innerHTML = "Nome enviado foi: " + window.prompt("Digite seu nome: ");
}


function exibedados()
{
    window.alert("Nome digitado foi: " + document.getElementById("nome").value);
}