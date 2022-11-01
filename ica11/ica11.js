const qButton = document.querySelector(".new-quote");
const APIend = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

getQuote();
qButton.addEventListener('click',getQuote);

async function getQuote(){
   let text = await fetch(APIend);
    let response = await text.text();

    let JSONresponse = JSON.parse(response);
    console.log(JSONresponse['message']);

    displayQuote(JSONresponse['message']);
}

function displayQuote(quote){
document.getElementById('js-quote-text').textContent = quote;
}

