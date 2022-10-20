const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picArray=['images/DIA.jpg', 'images/giraffe.jpg', 'images/SensorBox.jpg' ,'images/Triad.jpg' ,'images/TriplePlane.jpg'];
/* Declaring the alternative text for each image file */
const picDesc=['The Denver International Airport with colors desaturated','A giraffe','A sensor box I made for my OBJECT class','A triad I made for my IMAGE class','A photoshop of planes landing'];

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