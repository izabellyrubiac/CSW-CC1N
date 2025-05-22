


function enviar() {
    var idade = document.getElementById('entrada').value
    
    idade = parseInt(idade)
    if (idade == 0) {
        document.getElementById('resultado').innerHTML = 'É um recém nascido'
    }
    else if (idade > 0 && idade <= 9) {
        document.getElementById('resultado').innerHTML = 'É uma criança'
    }
    else if (idade >= 10 && idade <= 15) {
        document.getElementById('resultado').innerHTML = 'É um adolescente'
    }
    else if (idade >= 16 && idade <= 25) {
        document.getElementById('resultado').innerHTML = 'É um jovem'
    }
    else if (idade >= 26 && idade < 60) {
        document.getElementById('resultado').innerHTML = 'É um adulto'
    }
    else if (idade >= 60 && idade <= 100) {
        document.getElementById('resultado').innerHTML = 'É um idoso'
    }
    else {
        document.getElementById('resultado').innerHTML = 'Idade inválida'
    }
    

}