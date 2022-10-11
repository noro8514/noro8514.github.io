const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if(mySrc === "../img/top-image.png"){
        myImage.setAttribute("src", "../img/bottom-image.png");
    }
    else{
        myImage.setAttribute("src","../img/top-image.png");
    }
};

let bodyChange = document.querySelector("h1");
bodyChange.addEventListener("mouseover", colorChange);

function colorChange(){
    bodyChange.style.color = "red";
}
