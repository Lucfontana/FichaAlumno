const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
event.preventDefault();
// Obtener valores del formulario
     const nombre = String(document.getElementById("nombre").value.trim());
     const apellido = String(document.getElementById("apellido").value);
     const email = String(document.getElementById("email").value);
     const fnac = document.getElementById("fnac").value;
     const ciudad = String(document.getElementById("ciudad").value);
     const tel = Number(document.getElementById("tel").value);
     const contrasena = String(document.getElementById("contrasena").value);
     const repcontrasena = String(document.getElementById("repcontrasena").value);
     const mensaje = document.getElementById("mensaje");

    // variables de las respuestas
     const nameR = document.getElementById("nameResp");
     const apellidoR = document.getElementById("apellidoResp");
     const emailR = document.getElementById("emailResp");
     const contrasenaResp = document.getElementById("contrasenaResp");
     const fnacR = document.getElementById("fnacResp");
     const ciudadR = document.getElementById("ciudadResp");
     const telResp = document.getElementById("telResp");
     
     //VERIFICACION DE REGEX
     //Al menos una mayuscula, un caracter especial y 1 minuscula
     //Lo unico malo es que lo sigue en orden, tiene que empezar en 
     //Mayuscula y despues la minuscula
     const Regex = RegExp("[A-Z]+[a-z]+");

     // Validaciones
  if (contrasena != repcontrasena) {
      alert('Las contraseñas deben ser iguales');
      mensaje.textContent="Las contraseñas deben ser iguales";
      return
   } else 

  if (nombre.length < 10 || nombre.length > 30) {
         alert("El nombre ingresado debe tener entre 10 y 30 caracteres");
         mensaje.textContent = "El nombre ingresado debe tener entre 10 y 30 caracteres";
         return;
     } else

     if (apellido.length < 10 || apellido.length > 30) {
         alert("El apellido ingresado debe tener entre 10 y 30 caracteres");
         mensaje.textContent = "El apellido ingresado debe tener entre 10 y 30 caracteres";
         return;

     } else  if (nombre === "" || apellido === "" || email === "" || ciudad === "" || tel.toString() === "" || fnac.toString() === "") {
        alert("Por favor, completa todos los campos.");
        mensaje.textContent="Por favor, completa todos los campos.";
        return;
    //A continuacion, viene la validación del regex, esta se fija si NO
    //Se cumple la condición del regex y tira mensaje de error
    } else if (!(Regex.test(contrasena))){
        alert("Su contraseña debe tener al menos una mayuscula seguido de una minuscula");
        mensaje.textContent="Su contraseña debe tener al menos una mayuscula seguido de una minuscula";
        return;
    } else {
        //Mostrar respuestas
        nameR.textContent = "Nombre del alumno: " + nombre;
        apellidoR.textContent = "Apellido del alumno: " + apellido;
        emailR.textContent = "Email del alumno: " + email;
        contrasenaResp.textContent = "Contraseña del alumno: " + contrasena;
        fnacR.textContent = "Fecha de nacimiento: " + fnac;
        ciudadR.textContent = "Ciudada del alumno: " + ciudad;
        telResp.textContent = "Telefono del alumno: " + tel;
        mensaje.textContent = ""; //El mensaje se error se pone vacío pq todo funciona bien
    }
 {
    // Mostrar respuestas

    mensaje.style.color="green";
    mensaje.textContent="Bienvenido " + nombre + " " + apellido + " has ingresado satisfactoriamente";
 }

   es_segura(contrasena, repcontrasena);
 });

function es_segura(contrasena, repcontrasena){
   /^/
}
 