function fibonacci(upperLimit) {
  if(upperLimit <= 2 ){
    return "Error";
  }
  if(typeof(upperLimit) != "number"){
    return "Error";
  }
  var total = [];
  var var1 = 0;
  var var2 = 1;
  var var3;
  total.push(var1);
  total.push(var2);
    for(var i=3; i <= upperLimit;i++)
    {
      var3 = var1 + var2;
      var1 = var2;
      var2 = var3;
      total.push(var3);
    }
    return total;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
