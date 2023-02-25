    // EN ESTE EJERCICIO PASAN 3 EXPECT SON LOS QUE INDICAN QUE NO UTILIZAS LOS METODOS (values, keys, entries)
    //function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:

    const objeto = { nombre: "Fulano", apellido: "Rodriguez" }

    var resultado = {}
    for(let i in objeto){
        resultado[objeto[i]] = i //Esta es la linea que se encarga de invertir el objeto
    }
    console.log (resultado)


