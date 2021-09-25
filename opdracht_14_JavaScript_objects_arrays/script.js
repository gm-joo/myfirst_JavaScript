let person = {
    name: 'Gepke',
    age: 32,
    evaluations: [7, 10, 9]
};
//console.log(person);

//console.log(person.evaluations);//uitkomst [7, 10, 9]

let selectedColors = ['rood', 'wit', 'blauw'];
//console.log(selectedColors);
//console.log(selectedColors.length);//geeft 3 (lengte van de array)
//console.log(selectedColors[0]);//geeft rood


selectedColors.push('oranje');//extra element toevoegen aan array selectedColors
//console.log(selectedColors);//uitkomst rood wit blauw oranje

selectedColors.push(5);//voeg een cijfer toe aan je array
//console.log(selectedColors);//resultaat rood wit blauw 5

//voeg een object toe aan je array met de push methode
let greeting = {
    greeting: 'hi ik ben een object'
}
selectedColors.push(greeting);
//console.log(selectedColors);//resultaat rood, wit, blauw, 5, {greeting: 'hi ik ben een object'}

let lastElement = selectedColors[selectedColors.length - 1]; //hiermee kun je het laatste item van je lijst identificeren dus length -1
//console.log(lastElement); //geeft laatste element

//log alleen de value van de naam, door middel van de key name
//console.log(person.name);

//log alleen de leeftijd age
//console.log(person.age);

/* gebruik de dot-notation en de bracket-notation voor het loggen van de 2 properties
bracket notation*/
//  person['name'] = 'Gepke';
//  console.log(person.name);
//  person['age'] = 32;
//  console.log(person.age);

/*dot notation*/
//  person.name= 'Gepke'
//  console.log(person.name);
//  person.age= 32;
//  console.log(person.age);


//deel 3 van de opdracht gaat hieronder verder

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

//laatste object (kattenras) van de array loggen:
let lastCatbreed = catBreeds[catBreeds.length - 1];
console.log("Naam van het laatste kattenras:", lastCatbreed.name);//uitkomst: Naam van het laatste kattenras: American Bobtail

//energy levels van de eerste kat loggen:
console.log("Energy levels van de eerste kat:", catBreeds[0].energy_level);//uitkomst: Energy levels van de eerste kat: 5

//het eerste temperament van de temperamenten van de tweede kat loggen:
console.log("Het eerste temperament van de temperamenten van de tweede kat:", catBreeds[1].temperament[0]);//uitkomst: Het eerste temperament van de temperamenten van de tweede kat: Affectionate

//het laatst temperament van de temperamenten van de derde kat loggen:
console.log("het laatste temperament van de temperamenten van de derde kat:", catBreeds[2].temperament[4]);//uitkomst: Het laatste temperament van de temperamenten van de derde kat: Sensitive

//het favoriete voedsel van de derde kat loggen:
console.log("het favoriete voedsel van de derde kat:", catBreeds[2].food.favourite_food);//uitkomst: het favoriete voedsel van de derde kat: meaty things

