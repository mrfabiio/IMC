const calcular = () => {
    let nome = document.getElementById('nome')
    let altr = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let result = document.getElementById('resp')
    let imc =  peso.value / (altr.value * altr.value)

    if(nome.value.length == 0 || altr.value.length ==0 || peso.value.length ==0) {
        result.innerHTML = `Favor, informar todos os dados`
    }else if(imc <= 18.5) {
        result.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)} - Situação: Magreza.`
    }else if(imc >18.5 && imc <= 24.9) {
        result.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)} - Situação: Normal.`
    }else if(imc > 24.9 && imc <= 29.9) {
        result.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)} - Situação: Sobrepeso.`
    } else if(imc > 29.0 && imc <= 39.9) {
        result.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)} - Situação: Obesidade.`
    }else if(imc >40){
        result.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)} - Situação: Obesidade/Grave.`
    }
}

//

