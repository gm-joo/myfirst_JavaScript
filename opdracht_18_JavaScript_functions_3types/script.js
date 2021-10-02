/*In this exercise we're going to write a single function in three styles.

The function we're going to create will do the following.
-take two numbers
-each number will be squared (multiplied with itself)
-the squared numbers will be added together
-this sum will be squared again
-the resulting value is returned
Write this function in all three styles and give the functions and their arguments good names. 
They cannot have exactly the same name. There are multiple ways to do this.
-function declaration
-function expression
-arrow function
After you're done, check that all three functions give the same result if you give them the same arguments.
*/

function calculateSquare1(number1, number2) {
    const squareN1 = number1 * number1;
    const squareN2 = number2 * number2;
    const sum1and2 = squareN1 + squareN2;
    const sumtotal = sum1and2 * sum1and2;
    return sumtotal;
}
console.log(calculateSquare1(2, 5));

const calculateSquare2 = function (number1, number2) {
    const squareN1 = number1 * number1;
    const squareN2 = number2 * number2;
    const sum1and2 = squareN1 + squareN2;
    const sumtotal = sum1and2 * sum1and2;
    return sumtotal;
};
console.log(calculateSquare2(2, 5));

const calculateSquare3 = (number1, number2) => {
    const squareN1 = number1 * number1;
    const squareN2 = number2 * number2;
    const sum1and2 = squareN1 + squareN2;
    const sumtotal = sum1and2 * sum1and2;
    return sumtotal;
};
console.log(calculateSquare3(2, 5));
