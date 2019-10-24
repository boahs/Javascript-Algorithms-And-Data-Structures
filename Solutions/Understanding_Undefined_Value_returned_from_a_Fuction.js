var sum = 0;
function addThree(){
	sum = sum + 3;
}
function addFive() {
	sum = sum + 5;
}
addThree();
addFive(); // This is a tricky one - you don't need to include the return statement when you call something. It can return undefined. This will modify sum so if you were to call sum(); it would come out as 8. 