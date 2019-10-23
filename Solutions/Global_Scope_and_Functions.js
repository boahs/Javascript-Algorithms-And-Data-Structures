var myGlobal = 10;


function fun1() {
  oopsGlobal = 5;

}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
} // Vars defined outside of a function block have global scope. Vars declared without the var keyword are auto created in the global scope. 
