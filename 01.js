/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
var menor = arr[0]
var mayor = arr[0]

  for (i= 1; i < arr.length; i++){
    if (arr[i] > mayor){
    mayor = arr[i]
    } else if (arr[i] < menor){
    menor = arr[i]
    }
  }
  resta = mayor - menor;
  return(resta);
};

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor