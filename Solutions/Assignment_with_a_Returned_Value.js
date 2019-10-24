var processed = 0;

function processArg(num) { //creating processArg function
return (num + 3) / 5;
}
processed = processArg(7); //returns (7 + 3) / 5 = 2 because everything to the right of a equal sign is resolved before the value is assigned. This means you can take the return value of a function and assign it to a variable. 