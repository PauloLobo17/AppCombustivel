//Dom
const distancia= document.querySelector('distancia')
const consumo= document.querySelector('consumo')
const preco= document.querySelector('preco')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')


botao.addEventListener('click',viagem)


function viagem(){
    d= Number(distancia.value)
    c= Number(consumo.value)
    p= Number(preco.value)

    calculo = (d/c)*p

    resultado.textContent = `A sua viagem vai custar em R$ ${calculo.toFixed(2)}`

}