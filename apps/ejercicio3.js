/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión*/

let frase;
let confirmacion = true;

while (confirmacion == true ) {
  frase = prompt("Ingresa la frase que quieras: ");
  confirmacion = confirm ("Pulse aceptar si desea ingresar una nueva frase");
  if (confirmacion==true){
    document.write(` ${frase}-`)
  }else {document.write(` ${frase}`)}
}

