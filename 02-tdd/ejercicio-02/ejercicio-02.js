function busquedaLinear (array,itemToSearch) {
  var contar = 0;
  if(array == undefined || itemToSearch == undefined){
    return "Error";
  }
  for(var i = 0; i < array.length ; i++){
      if(array[i] != itemToSearch){
        contar++;
      } else { return i;}
  }
  if(typeof(array) != "object"){
    return "Error de dato";
  }
  if(contar == array.length){
    return false;
  }
}
//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
