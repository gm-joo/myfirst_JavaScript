
//1. HEY KIDDO assignment
//create a function that has one parameter: the age
//this function should return true if the age is >= 18, false in all other cases
//think of a good name for the function and the parameter

const ageCheck = function(number) {
        if (number >= 18){
        return true;
}
    return false;
};
//console.log (ageCheck(12));//input 12: prints "false" input 20: prints "true"

//create a second function that has one parameter: the age
//think of a good name for the function and the parameter
//this second function uses (calls) the first function, giving it the age, to check if we get an adult age
//if it's an adult the second function should return "Hello there"
//if it's not an adult it should return "Hey kiddo"
//use console.log to display the return value of the second function

const greeting = function(number) {
    const adultGreeting = ageCheck(number);
        if (adultGreeting == true) {
        return"Hello there";
    }   else {
        return "Hey kiddo";
    }
};
 //console.log(greeting(82));

//2. VAT calculations assignment
const calculateVAT = function(baseprice, VATpercentage){
        return baseprice*VATpercentage;   
};

const VATresult = function(){
        const VAT= calculateVAT(2, 0.09);
        console.log(VAT);
};

VATresult();


