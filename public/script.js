let isDragging = false;
const elemento = $('section')
  $( function() {
    $( "section" ).draggable({
      start: function() {
        isDragging = true;
      },
      drag: function() {
        isDragging = true;

      },
      stop: function() {
        isDragging = false;
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

const form = document.getElementById('formulario');


Socket.on('chat message'),
 
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

 