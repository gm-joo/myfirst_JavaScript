//no arguments
//write a function that always paints the wall red
const paint = function () {
    console.log("The wall has been painted red");
};
//call the function to check if it works
paint();


//single argument
const paint = function (color) {
    console.log("The wall has been painted " + color);
};
paint("green");//gives the wall has been painted green
paint("pink");//gives the wall has been painted pink
paint();//gives the wall has been painted undefined


//multiple arguments
const paint = function (color, location) {
    console.log("The " + location + " wall has been painted " + color);
};
paint("orange", "north");
//does the order of the arguments matter when calling the function? YES
//what happens if you switch them in the function definition? the orange wall has been painted north
//what happens if you change the order of the arguments in the function definition and when calling the function? the north wall has been painted orange

