function phoneticLookup(val) {
    var result = "";
  
    let lookup = {
      "alpha": "Adams",
      "bravo": "Boston",

    }
  var result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");
  