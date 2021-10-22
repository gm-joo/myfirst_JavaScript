// Opdracht 1: Een click event vastmaken aan een button

var button= document.getElementById("mybutton");

button.onclick = function() {
    alert("button clicked");
}

// Opdracht 2: Voeg een tweede button toe aan je HTML 
// met de tekst "Change Background", maak een klik event vast
// aan de nieuwe button, wanneer er op de change-background-button geklikt
// wordt, ga je de class "red-background" toevoegen aan je body element.

var button2= document.getElementById("mybutton2");
const bodybackground = document.body;

button2.onclick = function() {
   bodybackground.classList.add("red-background");
}

// Opdracht 3: met toggle de changeColor functie veranderen 
//zodat de achtergrondkleur ook weer terug veranderd naar rood 
//wanneer er op de knop wordt geklikt. 

button2.onclick = function() {
    bodybackground.classList.toggle("red-background");
}
