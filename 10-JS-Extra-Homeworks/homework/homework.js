// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var res = [];
  for(let clave in objeto){
    var juntos = [clave, objeto[clave]];
    res.push(juntos);
  }
  return res;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var obj = {};
var cont;
  for(var i = 0; i < string.length; i++){
    cont = 0;
    if(!obj[string[i]]){
    for(var l = 0; l< string.length;l++){
      if(string[i] === string[l]){
        cont++;
      }
    }
    obj[string[i]]= cont;
  }
  else{
    continue;
  }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minus = '';
  var mayus = '';
  for(var i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayus = mayus + s[i];
    }
    else{
      minus = minus + s[i];
    }
  }
  mayus = mayus + minus;
  return mayus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = '';
  var alrevez = '';
  var res = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === ' ' || i === str.length - 1){
      if(i === str.length -1){
        palabra = palabra + str[i];
      }
      for(var l = palabra.length; l > 0; l--){
        alrevez = alrevez + palabra[l-1];
      }
      res = res + alrevez;
      if(i === str.length -1){
        continue;
      }
      else{
        res = res + ' ';
      }
      palabra = '';
      alrevez = '';
    }
    else{
      palabra = palabra + str[i];
    }
  }
  return res;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero.toString();
  var alrevez = '';
  for(var i = str.length; i > 0; i--){
    alrevez = alrevez + str[i-1];
  }
  if(str === alrevez){
    return 'Es capicua';
  }
  else{
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var res = '';
  for(var i = 0; i < cadena.length; i++){
    switch(cadena[i]){
      case 'a': break;
      case 'b': break;
      case 'c': break;
      default: res = res + cadena[i];
    }
  }
    return res;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux;
  for(var i = 0; i < arr.length; i++){
    for(var l = i; l < arr.length; l++){
    if(l+1 === arr.length){
      continue;
    }
    else{
      if(arr[l].length > arr[l+1].length){
        aux = arr[l];
        arr[l] = arr[l+1];
        arr[l+1] = aux;
      }
    }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var res =[];
  arreglo1.forEach(function(elemento){
    arreglo2.forEach(function(ele){
      if(elemento === ele && !res.includes(ele)){
        res.push(ele);
      }
    })
  })
  return res;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

