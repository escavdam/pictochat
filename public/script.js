let isDragging = false;
const elemento = $('section')
  $( function() {
    $( "section" ).draggable({
      start: function() {
        isDragging = true;
      },
      drag: function() {
        console.log("arrastrando")

      },
      stop: function() {
        console.log("me has soltado")
      }
    });
  } );

function toggleChat(){
  const lista = document.querySelector("ul")
  const form = document.querySelector("form")
  lista.hidden = !lista.hidden;
  if(form.style.display === "none"){
    form.style.display = "flex";
  } else {
    form.style.display = "none"
  }
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    if(mouseIsPressed && !isDragging) {
        const datos = {
            x: mouseX,
            y: mouseY
        }
        //socket.emit("paint", datos)
      fill(0);
      ellipse(mouseX, mouseY, 20)
    }
}

function convertirEnlaceAMarcaLista(mensaje) {
  // Verificar si el mensaje contiene un enlace
  if (mensaje.startsWith("https://")) {
      // Crear un elemento de lista <li>
      var listaItem = document.createElement("li");

      // Crear un elemento de enlace <a>
      var enlace = document.createElement("a");
      enlace.href = mensaje; // Establecer el enlace href como el mensaje

      // Añadir el texto del mensaje al enlace
      enlace.appendChild(document.createTextNode(mensaje));

      // Añadir el enlace al elemento de lista
      listaItem.appendChild(enlace);

      // Devolver el elemento de lista <li> con el enlace dentro
      return listaItem;
  } else {
      // Si el mensaje no contiene un enlace, devolver el mensaje original
      return mensaje;
  }
}


var mensajeConEnlace = "https://www.ejemplo.com";
var mensajeSinEnlace = "Este es un mensaje normal";

var resultadoConEnlace = convertirEnlaceAMarcaLista(mensajeConEnlace);
var resultadoSinEnlace = convertirEnlaceAMarcaLista(mensajeSinEnlace);

console.log(resultadoConEnlace); // Imprime el elemento <li> con el enlace dentro
console.log(resultadoSinEnlace); // Imprime el mensaje original, ya que no contiene un enlace

 
 