
function healthCheck(boahs){
	
if (boahs <= 1000 && boahs >= 250) {
	return "In good health above 250, and below 1000.";
} // Using && you can check two things at once. Logical and operator. Checks left, and right side resulting in a true statement.

return "Not in good health";
}

healthCheck(550); //Change if wanting to check other values. 
