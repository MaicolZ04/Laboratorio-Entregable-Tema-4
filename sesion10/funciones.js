//pagina 1
function mostrarValores() {
  let nombre = "Maicol";
  let edad = 19;
  let esEstudiante = true;
  document.write("Nombre: ", nombre, "<br>");
  document.write("Edad: ", edad, "<br>");
  document.write("¿Es Estudiante?: ", esEstudiante, "<br>", "<br>");

  nombre = "Andreysson";
  edad = 25;
  esEstudiante = true;
  document.write("Nombre: ", nombre, "<br>");
  document.write("Edad: ", edad, "<br>");
  document.write("¿Es Estudiante?: ", esEstudiante, "<br>", "<br>");
}
//pagina 2
function operacionesMatematicas() {
  let a = 10;
  let b = 5;

  document.write("<strong> Resultado de Operaciones: </strong><br><br>");
  document.write("Resultado de Suma: ", a + b, "<br>");
  document.write("Resultado de Resta: ", a - b, "<br>");
  document.write("Resultado de Multiplación: ", a * b, "<br>");
  document.write("Resultado de División: ", a / b, "<br><br>");

  document.write("<strong> Resultado de Comparaciones: </strong><br><br>");
  document.write("¿a es Igual a b?: ", a == b, "<br>");
  document.write("¿a es mayor o igual que b?: ", a >= b, "<br>");
  document.write("a es menor o igual a b?: ", a <= b, "<br>");
  document.write("a es mayor que b?: ", a > b, "<br>");
  document.write("a es menor que b?: ", a < b, "<br>");
}
//pagina 3
function verificarConduccion() {
  let esMayorDeEdad = true;
  let tieneLiciencia = false;

  const puedeConducir = esMayorDeEdad && tieneLiciencia;
  document.write(
    "<strong>¿Puede Conducir?: </strong>" + puedeConducir + "<br><br>"
  );

  const mensajeBienvenida = `¡Hola, Bienvenido al sistema!`;
  document.write(
    "<strong>Mensaje de Bienvenida: </strong>" + mensajeBienvenida
  );
}