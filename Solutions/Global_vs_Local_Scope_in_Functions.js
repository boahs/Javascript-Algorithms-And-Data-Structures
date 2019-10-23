var blueTeeShirt = "Washed?"//global

function myWashedShirt(){
	var blueTeeShirt = "Clean";
	var blueTeeShirt = "Smelly";
	var blueTeeShirt = "Clean";
	console.log(blueTeeShirt);

	return blueTeeShirt;
}
myWashedShirt(); //it's possible to have local and global variables with the same name. When you do this the local variable takews procedence over the global variable. in order. 