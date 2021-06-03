// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nuevoNombre = ''
  for(var i = 0 ; i < nombre.length; i++) {
    var letra = nombre[i];
    if (i == 0) {
      nuevoNombre += letra.toUpperCase();
    }
    else {
      nuevoNombre += letra
    }

  }
  return nuevoNombre

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  const call = cb()
  return call
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  const suma = numeros.reduce( function(acc, elemento) {
    return  acc + elemento
  });
  cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  const resultado = array.forEach(function(elemento, indice){
    cb(elemento)
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
 
  const mapa = array.map(cb)
  
  return   mapa
  
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  function empiezaConA (elemento) {
    if (elemento.charAt(0) == 'a') {
      return elemento
    }
  }
  var filtrados = array.filter(empiezaConA)
  return filtrados
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
