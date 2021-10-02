const checkNumber = function (number) {
    if (number > 100) {
        return "true";
    }
    if (number <= 100) {
        return "false";
    }
};

const result = checkNumber(200);
console.log(result);
//this function produces something. it writes true or false to the console


//bouncer at the club
//arguments: 
//the maximum number of people in the club
//the current number of people in the club
//the age of the person wanting to enter the club
const bouncer = function (age, maxNumber) {

    if (age < 18) {
        return "this is a club for adults";
    }
    else if (maxNumber > 100) {
        return "it's too busy now, come back later";
    }
    else {
        return "come in";
    }
};
const result = bouncer(20, 50);
console.log(result);
//this function produces something. it calculates if ages and maxnumber have a certain value and it returns something according to the arguments we put into the function.

const average = function (number1, number2, number3, number4, number5) {
    const sum = (number1 + number2 + number3 + number4 + number5) / 5;
    return sum;
};

const calculate = average(1.5, 2.5, 0.5, 1.75, 9.95);
console.log(Math.round(calculate));
//this function produces something. it calculates the average of several arguments and returns the result







