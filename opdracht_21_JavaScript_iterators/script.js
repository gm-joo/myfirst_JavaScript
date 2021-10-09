//while loop met colors
const colors = ["yellow", "blue", "red", "orange"];
let i= 0;

while (colors[i]) {
    console.log(colors[i]);
    i++;    
}

//for loop met colors
//array.length = de lengte van je array (in dit geval dus 4 want array= 4 kleuren)
for (i=0; i<colors.length; i++){
    console.log(colors[i]);
}



//array methods
//Gebruik de forEach array method, om alle items in je array te loggen naar de console.
colors.forEach(element => console.log(element));

/*
1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    for loop: 4 regels
    while loop: 4 regels
2. Hoeveel regels neemt mijn forEach method in beslag?
    1 regel
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    je hoeft niet na te denken over de incrementer, je hoeft geen index variable aan te maken & geen condition.
4. looping through the properties of an object:*/

const person={
    name:"Gepke",
    age: 32,
    location: "Amsterdam",
    mailaddress: "gepkejoosten@gmail.com",
    birthday: "20 nov",
};

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }