const Age = 17;
const driverStatus = 'bob';
const firstName = 'Gepke';
const totalAmount = 102;

//iedereen die ouder is dan 18 mag naar binnen
if (Age < 18) {
    console.log("je bent jonger dan 18, je mag helaas niet naar binnen");
} else {
    console.log("je bent 18 jaar of ouder: welkom in de kroeg en veel plezier!")
}

//als je de bob bent dan mag je naar huis rijden en anders moet je een taxi nemen
if (driverStatus) {
    console.log("top! je bent de bob dus je mag naar huis rijden");
} else {
    console.log("helaas, je bent niet de bob dus je moet een taxi nemen");
}
//actie: als je tussen de 18 jaar of ouder en 25 jaar en jonger bent dan krijg je 50%korting
if (Age >= 18 && Age <= 25) {
    console.log("Je krijgt 50% korting!");
}

//actie als je Sarah of Bram heet dan krijg je een gratis biertje
if (firstName === 'Sarah' || firstName == 'Bram') {
    console.log("Gefeliciteerd! Je krijgt een gratis biertje!");
} else {
    console.log("Helaas geen gratis biertje voor jou");
}

//actie gratis hapje of drankje bij besteding
//meer dan 25 euro dan vega bitterballen
//meer dan 50 euro dan portie nachos
//meer dan 100 euro dan gratis flesje champagne

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Yes! Je krijgt een portie vega bitterballen!");

} else if (totalAmount > 50 && totalAmount <= 100) {
    console.log("Yessss je krijgt een portie nachos");

} else if (totalAmount > 100) {
    console.log("Nice! Je krijgt een flesje champagne!");
} else {
    console.log("bij minimale besteding van 26 euro ontvang je gratis hapjes of drankjes");
}