const inputElement = document.querySelector<HTMLInputElement>('#password')
const buttonElement = document.querySelector<HTMLButtonElement>('#btn-enviar')
if (buttonElement) buttonElement?.addEventListener('click', copiarTexto)
const iconElement = document.querySelector<HTMLElement>('#copy')
if (iconElement) iconElement?.addEventListener('click', copiarTexto)
const iconUpdate = document.querySelector<HTMLElement>('#update')
const barElement = document.querySelector<HTMLElement>('#bar')
const inputUpperCase = document.querySelector<HTMLInputElement>('#uppercase')
const inputNumbers = document.querySelector<HTMLInputElement>('#numbers')
const inputSimbols = document.querySelector<HTMLInputElement>('#simbols')
let passwordLength: number = 16


function generatePassword():void {
    let chars: string = 'abcdefghjkmnpqrstuvwxyz'

    const upperCase: string = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
    const numbers: string = '123456789'
    const simbols: string = '?!@&*()[]'

    if (inputUpperCase?.checked) {
        chars += upperCase
    }

    if (inputNumbers?.checked) {
        chars += numbers
    }
    
    if (inputSimbols?.checked) {
        chars += simbols
    }

    let password: string = ''

    for (let c: number = 0; c < passwordLength; c += 1) {
        const passwordRandow = Math.floor(Math.random() * chars.length)

        password += chars.substring(passwordRandow, passwordRandow + 1)

        if (inputElement) inputElement.value = password

        calculateQuality()
        calculateFontSize()
    }
}

function copiarTexto():void {
    if (!inputElement?.value) {
        alert('Mexa no range para copiar a senha')
    } else {
        alert('Senha copiada com sucesso!')
        navigator.clipboard.writeText(inputElement.value)
        inputElement.value = ''
    }
}

function calculateQuality():void {

    // T*25 + M*P20 + N*P25 + S*P30

    const percent = Math.round((passwordLength / 64) * 25 + (inputUpperCase?.checked ? 20 : 0) + (inputNumbers?.checked ? 25 : 0) + (inputSimbols?.checked ? 30 : 0)) // Ele pega o valor padrão que é 16 e divide por 64, e vezes 25 + o peso do input se ele estiver chekado se não estiver chekado ele não ganha nada de peso ou seja 0
    
    if (barElement) {
        barElement.style.width = `${percent}%`
    }

    if (percent > 60) {
        barElement?.classList.add('safe')
        barElement?.classList.remove('critical')
        barElement?.classList.remove('warning')
    } else if (percent > 40) {
        barElement?.classList.add('warning')
        barElement?.classList.remove('critical')
        barElement?.classList.remove('safe')
    } else {
        barElement?.classList.add('critical')
        barElement?.classList.remove('warning')
        barElement?.classList.remove('safe')
    }

    if (percent >= 100) {
        barElement?.classList.add('completed')
    } else {
        barElement?.classList.remove('completed')
    }
}

function calculateFontSize():void {
    if (passwordLength > 45) {
        inputElement?.classList.add('font-xxm')
        inputElement?.classList.remove('font-xm')
        inputElement?.classList.remove('font-sm')
    } else if (passwordLength > 32) {
        inputElement?.classList.add('font-xm')
        inputElement?.classList.remove('font-sm')
        inputElement?.classList.remove('font-xxm')
    } else if (passwordLength > 13) {
        inputElement?.classList.add('font-sm')
        inputElement?.classList.remove('font-xm')
        inputElement?.classList.remove('font-xxm')
    } else {
        inputElement?.classList.remove('font-sm')
        inputElement?.classList.remove('font-xm')
        inputElement?.classList.remove('font-xxm')
    }
}

const rangeElement = document.querySelector<HTMLInputElement>('#password-length')
rangeElement?.addEventListener('input', () => {
    passwordLength = Number(rangeElement.value)
    const passwordText = document.querySelector<HTMLElement>('#password-length-text')
    if (passwordText) {
        passwordText.innerHTML = String(passwordLength)
    }
    generatePassword()
})
iconUpdate?.addEventListener('click', () => generatePassword())
inputUpperCase?.addEventListener('click', () => generatePassword())
inputNumbers?.addEventListener('click', () => generatePassword())
inputSimbols?.addEventListener('click', () => generatePassword())