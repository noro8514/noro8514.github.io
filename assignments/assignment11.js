const qButton = document.querySelector(".new-quote");
const APIend = "https://api.quotable.io/random";

getQuote();
qButton.addEventListener('click',getQuote);

async function getQuote(){
   let text = await fetch(APIend);
    let response = await text.text();
console.log(response);
    let JSONresponse = JSON.parse(response);
console.log(JSONresponse);
    displayQuote(JSONresponse.content, JSONresponse.author);
}

function displayQuote(quote, author){
    let r = getRandomIntInclusive(0, 255);
    let g = getRandomIntInclusive(0, 255);
    let b = getRandomIntInclusive(0, 255);
document.getElementById('quote').style.color = 'rgb('+r+','+g+','+b+')';
document.getElementById('author').style.color = 'rgb('+r+','+g+','+b+')';
document.getElementById('quote').textContent = quote;
document.getElementById('author').textContent = "- " + author;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);}


//The extentions is that it takes three random values between 0 and 255, and colors both the quote and the author with that color each time the button is pressed