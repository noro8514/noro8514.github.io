const button = document.querySelector('.button');
let test_count = 10;

button.addEventListener('click', updateOutput);

setNum();
countdown(test_count);

setInterval(setNum,10000);


function updateOutput() {
    alert("Thats not your number, you cheater. Begone");
    window.close();
}



function setNum(){
const output = document.querySelector('.output');

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

output.textContent = phone_content;
}



function countdown(substitute){
    let count = document.querySelector('.countdown');

    count.textContent = substitute;

    substitute = reduce(substitute);

    console.log(substitute);

    setTimeout(() => {countdown(substitute)}, 1000);
}



function reduce(num){
    if(num === 1){
        return 10;
    }
    else{
    return num-1;
    }
}