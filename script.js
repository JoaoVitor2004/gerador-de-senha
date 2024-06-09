const inputElement = document.querySelector('#password')
const buttonElement = document.querySelector('#btn-enviar').addEventListener('click', copiarTexto)
const iconElement = document.querySelector('#copy').addEventListener('click', copiarTexto)
const iconUpdate = document.querySelector('#update')
const barElement = document.querySelector('#bar')
const inputUpperCase = document.querySelector('#uppercase')
const inputNumbers = document.querySelector('#numbers')
const inputSimbols = document.querySelector('#simbols')
let passwordLength = 16


function generatePassword() {
    let chars = 'abcdefghjkmnpqrstuvwxyz'

    const upperCase = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
    const numbers = '123456789'
    const simbols = '?!@&*()[]'

    if (inputUpperCase.checked) {
        chars += upperCase
    }

    if (inputNumbers.checked) {
        chars += numbers
    }
    
    if (inputSimbols.checked) {
        chars += simbols
    }

    let password = ''

    for (let c = 0; c < passwordLength; c += 1) {
        const passwordRandow = Math.floor(Math.random() * chars.length)

        password += chars.substring(passwordRandow, passwordRandow + 1)

        inputElement.value = password

        calculateQuality()
        calculateFontSize()
    }
}

function copiarTexto() {
    if (!inputElement.value) {
        alert('Mexa no range para copiar a senha')
    } else {
        alert('Senha copiada com sucesso!')
        navigator.clipboard.writeText(inputElement.value)
        inputElement.value = ''
    }
}

function calculateQuality() {

    // T*25 + M*P20 + N*P25 + S*P30

    const percent = Math.round((passwordLength / 64) * 25 + (inputUpperCase.checked ? 20 : 0) + (inputNumbers.checked ? 25 : 0) + (inputSimbols.checked ? 30 : 0)) // Ele pega o valor padrão que é 16 e divide por 64, e vezes 25 + o peso do input se ele estiver chekado se não estiver chekado ele não ganha nada de peso ou seja 0
    barElement.style.width = `${percent}%`

    if (percent > 60) {
        barElement.classList.add('safe')
        barElement.classList.remove('critical')
        barElement.classList.remove('warning')
    } else if (percent > 40) {
        barElement.classList.add('warning')
        barElement.classList.remove('critical')
        barElement.classList.remove('safe')
    } else {
        barElement.classList.add('critical')
        barElement.classList.remove('warning')
        barElement.classList.remove('safe')
    }

    if (percent >= 100) {
        barElement.classList.add('completed')
    } else {
        barElement.classList.remove('completed')
    }
}

function calculateFontSize() {
    if (passwordLength > 45) {
        inputElement.classList.add('font-xxm')
        inputElement.classList.remove('font-xm')
        inputElement.classList.remove('font-sm')
    } else if (passwordLength > 32) {
        inputElement.classList.add('font-xm')
        inputElement.classList.remove('font-sm')
        inputElement.classList.remove('font-xxm')
    } else if (passwordLength > 13) {
        inputElement.classList.add('font-sm')
        inputElement.classList.remove('font-xm')
        inputElement.classList.remove('font-xxm')
    } else {
        inputElement.classList.remove('font-sm')
        inputElement.classList.remove('font-xm')
        inputElement.classList.remove('font-xxm')
    }
}

const rangeElement = document.querySelector('#password-length')
rangeElement.addEventListener('input', () => {
    passwordLength = rangeElement.value
    document.querySelector('#password-length-text').innerHTML = passwordLength
    generatePassword()
})
iconUpdate.addEventListener('click', () => generatePassword())
inputUpperCase.addEventListener('click', () => generatePassword())
inputNumbers.addEventListener('click', () => generatePassword())
inputSimbols.addEventListener('click', () => generatePassword())












function requisicao() {
    const res = new XMLHttpRequest()
    res.open('get', 'https://api.github.com/users/JoaoVitor2004')
    res.send(null)
    res.onreadystatechange = () => {
        if (res.readyState === 4) {
            const obj = JSON.parse(res.responseText)
            console.log(obj)
        }
    }
}
requisicao()




let math = Math.random()
console.log(math)
console.log(Math.random() * 10)



// Math.random
let min = 1
let max = 100
function calculation() {
    const res = Math.floor(Math.random() * (max - min) + min)
    console.log(res)
}
calculation()


// Math.floor
let number1 = 9
let number2 = 2
const resultado = Math.floor(number1 / number2)
console.log(resultado)
console.log(`Resultado: ${number1 / number2}`)

function arredondar(n) {
    const res = Math.floor(Math.random() * n + 1)
    console.log(`Número inteiro: ${res}`)
}
arredondar(20)


const msg = 'Olá mundo'
let res = ''
for (let c = 0; c < 5; c += 1) {
    const msgLength = Math.floor(Math.random() * msg.length)
    res += msg.substring(msgLength, msgLength + 1)
}


for (let c = 0; c < 8; c += 1) {
    const mensagem = 'OlámeunomeéJoãoVitordeSouza'
    const resultalt = Math.floor(Math.random() * mensagem.length)
    const text = mensagem.substring(resultalt, resultalt + 1)
    console.log(text)
}