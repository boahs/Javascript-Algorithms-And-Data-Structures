function phoneticLookup(val) {
    var result = "";
  
    let lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",

    
  
    }
  var result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");
  