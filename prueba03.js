    // function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:

    persona = {
    nombre: "Lionel",
    apellido: 'Messi',
    invitado: true
    }
    

  for (let i in persona) {
    if (persona.invitado == true ){      

      if (persona.apellido == undefined){
        console.log ("Hola "+ persona.nombre + ", tu mesa está lista");

        } else if (persona.nombre == undefined){
        console.log ("Bienvenido Sr. "+ persona.apellido);

        } else 
        console.log (persona.nombre + " " + persona.apellido + ", un gusto tenerlo nuevamente! Bienvenido")
        }

        else if (persona.invitado == false){
        console.log ("Disculpe señor, no está invitado a la fiesta")
        } 
 
    
 };
 

