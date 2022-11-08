const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = 0;

button.addEventListener('click', updateOutput);

phone_content = setInterval(setNum(output),1000);

function updateOutput() {
    alert(phone_content);
}

function setNum(output){

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let num3 = Math.floor(Math.random() * 10);
let num4 = Math.floor(Math.random() * 10);
let num5 = Math.floor(Math.random() * 10);
let num6 = Math.floor(Math.random() * 10);
let num7 = Math.floor(Math.random() * 10);
let num8 = Math.floor(Math.random() * 10);
let num9 = Math.floor(Math.random() * 10);
let num10 = Math.floor(Math.random() * 10);

let phone_content = ""+num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;

console.log(phone_content);
output.textContent = phone_content;
}
