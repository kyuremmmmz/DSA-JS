/*Write a program that prints numbers from 1 to n.

For multiples of 3, print "Fizz".
For multiples of 5, print "Buzz".
For multiples of both 3 and 5, print "FizzBuzz".
Example Input:
makefile
Copy code*/

const fizzzBuzz = () => {
    const n = 15
    for (let index = 1; index <= n; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log("FizzBuzz");
        } else if (index % 5 === 0) {
            console.log("Buzz");
        } else if (index % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(index);
        }
    }
}

fizzzBuzz()
