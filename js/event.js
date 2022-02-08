function makeYellow(){
    document.body.style.backgroundColor='yellow'
}

//handle value button click by setting function name
const blueButton=document.getElementById('blue-button');
//just set name of the function
blueButton.onclick=blue;

function blue(){
    document.body.style.backgroundColor='blue'
}

// handle event anonymous function
const greenButton=document.getElementById('green-button');
greenButton.onclick=function makeGreen(){
    document.body.style.backgroundColor='green';
}

// handle event addEventlinser 
const orangeButton=document.getElementById('orange-button');
orangeButton.addEventListener('click',orange);

function orange(){
    document.body.style.backgroundColor='orange'
}

const hotPinkButton=document.getElementById('hotPink-button');
hotPinkButton.addEventListener
