const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = "It was a crisp, frigid Tuesday. It was only 23 fahrenheit outside when :insertx: started making their way to :inserty:. Suddenly, out of nowhere, :insertx: :insertz:! Bob, a casual bystander, looked on and laughed rather maniacally. Bob threw a 20 pound rock at :insertx: and ran away.";
const insertX = ["Bowser","the Grim Reaper","Sheldon Cooper"];
const insertY = ["King Soopers","Yellowstone National Park","a boring science lecture"];
const insertZ = ["shot a duck","was robbed","commits arson"];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(/:insertx:/,xItem);
    newStory = newStory.replace(/:insertx:/,xItem);
    newStory = newStory.replace(/:insertx:/,xItem);
    newStory = newStory.replace(/:inserty:/,yItem);
    newStory = newStory.replace(/:insertz:/,zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/,name);
    newStory = newStory.replace(/Bob/,name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32)*(5.0/9.0)) + ' centigrade';
    newStory = newStory.replace(/23 fahrenheit/,temperature);
    newStory = newStory.replace(/20 pound/,weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}