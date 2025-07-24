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
    } else {
        nameR.textContent = "Nombre del alumno: " + nombre;
        apellidoR.textContent = "Apellido del alumno: " + apellido;
        emailR.textContent = "Email del alumno: " + email;
        contrasenaResp.textContent = "Contraseña del alumno: " + contrasena;
        fnacR.textContent = "Fecha de nacimiento: " + fnac;
        ciudadR.textContent = "Ciudada del alumno: " + ciudad;
        telResp.textContent = "Telefono del alumno: " + tel;
        mensaje.textContent = "";

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
 
/*const envFormulario = document.getElementById("envFormulario");

const nameR = toString(document.getElementById("nameResp"));
const apellidoR = toString(document.getElementById("ApellidoResp"));
const emailR = document.getElementById("emailResp");
const fnacR = document.getElementById("fnacResp");
const ciudadR = document.getElementById("ciudadResp");
const telResp = Number(document.getElementById("telR"));

envFormulario.addEventListener("submit", function() {
    const nombre = toString(document.getElementById("nombre"));
    const apellido = toString(document.getElementById("apellido"));
    const email = document.getElementById("email");
    const fnac = document.getElementById("fnac");
    const ciudad = document.getElementById("ciudad");
    const tel = Number(document.getElementById("tel"));

    if (nombre.length >= 30 || nombre.length < 10) {
        alert("El nombre ingresado debe tener entre 10 y 30 carácteres");
        return;
    }
    if (length(apellido) >= 30 || length(apellido) < 11) {
        alert("El apellido ingresado debe tener entre 10 y 30 carácteres");
    }

    event.preventDefault();
});

*/