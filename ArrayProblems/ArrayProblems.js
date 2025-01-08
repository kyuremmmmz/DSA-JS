// Problem 1 Reversing the string
let nameKo = "Christian David Jasmin";
let number = nameKo.length - 1;
let horizontalView = "";
let reverse = "";
let result = "";
for (number; number >=0 ; number--) {
    horizontalView += nameKo[number] + "";
    reverse = horizontalView;
}

if (reverse == horizontalView) {
    console.log("the string is reversed");
    result = reverse;
    console.log(`Result: ${result}`);
    
} else {
    console.log("the string is not reversed");
}

