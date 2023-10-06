const value = document.getElementById('valor');
const botaoAdicionar = document.getElementById('adicionar');
const botaoSubtracao = document.getElementById('subtrair');
const botaoResetar = document.getElementById('reset');


const updateValue  = () => {
    value.innerHTML = count;
}

let count = 0;
let intervalId = 0;

botaoAdicionar.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count +=1;
        updateValue()
    },100)
})
botaoSubtracao.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -=1;
        updateValue()
    },100)
})
botaoResetar.addEventListener('click', () => {
    count = 0
    updateValue()
})

document.addEventListener('mouseup',() => clearInterval(intervalId))