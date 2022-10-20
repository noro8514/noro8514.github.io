const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picArray=['/images/pic1.jpg', '/images/pic2.jpg', '/images/pic3.jpg' ,'/images/pic4.jpg' ,'/images/pic5.jpg'];
/* Declaring the alternative text for each image file */
const picDesc=['Pic1','Pic2','Pic3','Pic4','Pic5'];

/* Looping through images */
for(let i = 0; i<5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', picArray[i]);
    newImage.setAttribute('alt', picDesc[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => nameSwap(picArray[i],picDesc[i]));
}

function nameSwap(imgSrc, imgAlt){
displayedImage.setAttribute('src',imgSrc);
displayedImage.setAttribute('alt', imgAlt);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', lightDark);

function lightDark(){
    let className = btn.getAttribute('class');

    if(className === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}