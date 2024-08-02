"use strict";
const inputElement = document.querySelector('#password');
const buttonElement = document.querySelector('#btn-enviar');
if (buttonElement)
    buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', copiarTexto);
const iconElement = document.querySelector('#copy');
if (iconElement)
    iconElement === null || iconElement === void 0 ? void 0 : iconElement.addEventListener('click', copiarTexto);
const iconUpdate = document.querySelector('#update');
const barElement = document.querySelector('#bar');
const inputUpperCase = document.querySelector('#uppercase');
const inputNumbers = document.querySelector('#numbers');
const inputSimbols = document.querySelector('#simbols');
let passwordLength = 16;
function generatePassword() {
    let chars = 'abcdefghjkmnpqrstuvwxyz';
    const upperCase = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const numbers = '123456789';
    const simbols = '?!@&*()[]';
    if (inputUpperCase === null || inputUpperCase === void 0 ? void 0 : inputUpperCase.checked) {
        chars += upperCase;
    }
    if (inputNumbers === null || inputNumbers === void 0 ? void 0 : inputNumbers.checked) {
        chars += numbers;
    }
    if (inputSimbols === null || inputSimbols === void 0 ? void 0 : inputSimbols.checked) {
        chars += simbols;
    }
    let password = '';
    for (let c = 0; c < passwordLength; c += 1) {
        const passwordRandow = Math.floor(Math.random() * chars.length);
        password += chars.substring(passwordRandow, passwordRandow + 1);
        if (inputElement)
            inputElement.value = password;
        calculateQuality();
        calculateFontSize();
    }
}
function copiarTexto() {
    if (!(inputElement === null || inputElement === void 0 ? void 0 : inputElement.value)) {
        alert('Mexa no range para copiar a senha');
    }
    else {
        alert('Senha copiada com sucesso!');
        navigator.clipboard.writeText(inputElement.value);
        inputElement.value = '';
    }
}
function calculateQuality() {
    const percent = Math.round((passwordLength / 64) * 25 + ((inputUpperCase === null || inputUpperCase === void 0 ? void 0 : inputUpperCase.checked) ? 20 : 0) + ((inputNumbers === null || inputNumbers === void 0 ? void 0 : inputNumbers.checked) ? 25 : 0) + ((inputSimbols === null || inputSimbols === void 0 ? void 0 : inputSimbols.checked) ? 30 : 0));
    if (barElement) {
        barElement.style.width = `${percent}%`;
    }
    if (percent > 60) {
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.add('safe');
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.remove('critical');
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.remove('warning');
    }
    else if (percent > 40) {
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.add('warning');
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.remove('critical');
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.remove('safe');
    }
    else {
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.add('critical');
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.remove('warning');
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.remove('safe');
    }
    if (percent >= 100) {
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.add('completed');
    }
    else {
        barElement === null || barElement === void 0 ? void 0 : barElement.classList.remove('completed');
    }
}
function calculateFontSize() {
    if (passwordLength > 45) {
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.add('font-xxm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-xm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-sm');
    }
    else if (passwordLength > 32) {
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.add('font-xm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-sm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-xxm');
    }
    else if (passwordLength > 13) {
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.add('font-sm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-xm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-xxm');
    }
    else {
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-sm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-xm');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove('font-xxm');
    }
}
const rangeElement = document.querySelector('#password-length');
rangeElement === null || rangeElement === void 0 ? void 0 : rangeElement.addEventListener('input', () => {
    passwordLength = Number(rangeElement.value);
    const passwordText = document.querySelector('#password-length-text');
    if (passwordText) {
        passwordText.innerHTML = String(passwordLength);
    }
    generatePassword();
});
iconUpdate === null || iconUpdate === void 0 ? void 0 : iconUpdate.addEventListener('click', () => generatePassword());
inputUpperCase === null || inputUpperCase === void 0 ? void 0 : inputUpperCase.addEventListener('click', () => generatePassword());
inputNumbers === null || inputNumbers === void 0 ? void 0 : inputNumbers.addEventListener('click', () => generatePassword());
inputSimbols === null || inputSimbols === void 0 ? void 0 : inputSimbols.addEventListener('click', () => generatePassword());
