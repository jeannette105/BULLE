let scoreElement = document.getElementById("score").querySelector("h1");
let val = document.querySelectorAll(".bulle, .petit, .yen, .pet, .moyen");
let width = window.innerWidth;   
let height = window.innerHeight;
let currentScore = 0;

function couleurCercles() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let valeur = `rgb(${r}, ${g}, ${b})`;
    val.forEach(circle => {
        circle.style.backgroundColor = valeur;
    });
}
setInterval(couleurCercles, 1000);

let yPositions = [];
let delays = [0, 500, 1000, 1500, 2000];  

val.forEach((circle, index) => {
    yPositions[index] = height;  
    let xPosition = Math.random() * (width - 50); 

    circle.style.left = `${xPosition}px`;
    circle.style.top = `${yPositions[index]}px`;

    function moveCircle() {

        yPositions[index] -= Math.random() * 2 + 1; 

        if (yPositions[index] < -50) {
            yPositions[index] = height; 
            let xPosition = Math.random() * (width - 50); 
            circle.style.left = `${xPosition}px`; 
        }
        circle.style.top = `${yPositions[index]}px`;
    }

    setTimeout(() => {
        setInterval(moveCircle, 10);
    }, delays[index]);

    circle.addEventListener('click', () => {
        currentScore++; 
        scoreElement.textContent = currentScore; 
    });
});
