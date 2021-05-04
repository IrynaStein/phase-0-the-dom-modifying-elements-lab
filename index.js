// Write your code here!
document.querySelector('main').remove()

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.setAttribute("id","victory")
newHeader.innerHTML = "Iryna is the champion";

// Below is old code from pre-work phase of the course:
// const main = document.querySelector ('main');
// main.remove();

// const newHeader = document.createElement('h1');
// document.body.appendChild(newHeader); 
// document.getElementsByTagName("h1")[0].setAttribute("id", "victory");

// const headerText = document.getElementById('victory');
// headerText.innerHTML = "YOUR-NAME is the champion"