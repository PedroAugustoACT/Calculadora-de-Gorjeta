function showValues(){

    let pay = document.getElementById('valuePay')
    let gor = document.getElementById('valueGor')
    let peo = document.getElementById('valuePeo')
    let radio = document.querySelector('input[name="arrendondar"]:checked').value

    let txtError1 = document.getElementById('txtError1')
    let txtError2 = document.getElementById('txtError2')
    let txtError3 = document.getElementById('txtError3')

    let total1 = Number(valuePay.value)
    let total2 = Number(valueGor.value)
    let total3 = Number(valuePeo.value)

    if(pay.value.length == 0){
        txtError1.innerHTML = `Preencha esse campo`
    }
    else{
        txtError1.innerHTML = ``
    }

    if( gor.value.length == 0){
        txtError2.innerHTML = `Preencha esse campo`
    }
    else{
        txtError2.innerHTML = ``
    }

    if( peo.value.length == 0){
        txtError3.innerHTML = `Preencha esse campo`
        return
    }
    else if (total3 % 1 !== 0){
        txtError3.innerHTML = `Digite um número inteiro`
        return
    }
    else if(total3 == 0){
        txtError3.innerHTML = `Digite um número maior que 0`
        return
    }
    else{
        txtError3.innerHTML = ``
    }  

    let totalGor = document.getElementById('totalGor')
    let totalPay = document.getElementById('totalPay')
    let totalPeo = document.getElementById('totalPeo')


    totalGor1 = total1 * (total2/100)
    totalPay1 = totalGor1 + total1
    totalPeo1 = totalPay1/total3
    
    if(radio == "nao"){
        
        totalGor.innerHTML = `R$ ${totalGor1.toFixed(2)}`

        
        totalPay.innerHTML = `R$ ${totalPay1.toFixed(2)}`

        
        totalPeo.innerHTML = `R$ ${totalPeo1.toFixed(2)}`
    }
    else if(radio == "cima")
    {
        totalGor1 = Math.ceil(totalGor1)
        totalGor.innerHTML = `R$ ${totalGor1.toFixed(2)}`

        totalPay1 = Math.ceil(totalPay1)
        totalPay.innerHTML = `R$ ${totalPay1.toFixed(2)}`

        totalPeo1 = Math.ceil(totalPeo1)
        totalPeo.innerHTML = `R$ ${totalPeo1.toFixed(2)}`
    }
    else if(radio == "baixo")
    {
        totalGor1 = Math.floor(totalGor1)
        totalGor.innerHTML = `R$ ${totalGor1.toFixed(2)}`

        totalPay1 = Math.floor(totalPay1)
        totalPay.innerHTML = `R$ ${totalPay1.toFixed(2)}`

        totalPeo1 = Math.floor(totalPeo1)
        totalPeo.innerHTML = `R$ ${totalPeo1.toFixed(2)}`
    }
    
}