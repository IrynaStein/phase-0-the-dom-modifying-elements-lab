// Write your code here!
const main = document.querySelector ('main');
main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader); 
document.getElementsByTagName("h1")[0].setAttribute("id", "victory");

const headerText = document.getElementById('victory');
headerText.innerHTML = "YOUR-NAME is the champion"