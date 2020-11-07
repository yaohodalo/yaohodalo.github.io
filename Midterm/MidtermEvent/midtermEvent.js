let myName = "Yao Poudima";  // MY name

let myMessage1 = document.createElement('m');
myFirst.className= 'midtermMessage1';
let myMessage2 = document.createElement('m');
mySecond.className= 'midtermMessage2';
document.querySelector('.container').append(myMessage1, myMessage2);
const myContent = document.querySelector('.container'); // content
myContent.textContent = midterMessage1 +  myName;

document.getElementById("btnGet").addEventListener("click", getMessage);

function getMessage(){
    document.getElementById("container").innerHTML; 
}