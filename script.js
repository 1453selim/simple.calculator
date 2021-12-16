

//a,b is two numbers and o :is operator to calculate

function basicCalculator(a, o, b) {
    var result;
    if(o === "+") { 
    return a + b;
    }else if(o === "-") {
        return a - b;
    } else if(o === "/" && b !== 0) { 
    return a / b; 
  } else if(o === "*") { 
    return a * b;
    }else {
    return "hesap yapılamadı lütfen düzgün karakter giriniz"
  }
    
}
   console.log(basicCalculator(12, "/", 3))



 function basicCalculator(a, o, b) {
    var result;
    if(o === "+") { 
    return a + b;
    }else if(o === "-") {
        return a - b;
    } else if(o === "/") {
    if(b===0) { 
        return null;
    }else {
      return a / b;
    }

  } else if(o === "*") { 
    return a * b;
    }else {
    return "hesap yapılamadı lütfen düzgün karakter giriniz"
  }
    
}
   console.log(basicCalculator(12, "/", 2));
   










