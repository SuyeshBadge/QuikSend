'use strict'
const inputField = document.querySelector('#num1');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    window.location.replace(`https://wa.me/+91${inputField.value}?text=Hi`);
    // console.log(`https://wa.me/+91${inputField.value}?text=Hi+There`);
})