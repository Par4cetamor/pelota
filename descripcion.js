// con estas funciones configuras el canvas, para la animacion
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// configuraciones de la pelota
let ballX = canvas.width / 2; // posision x de la pelota
let ballY = canvas.height / 2; // posición inicial y de la pelota
const ballRadius = 10; // con esta funcion configuras el  tamaño de la pelota
let ballSpeedX = 5; // con esta funcion configuras la velocidad horizontal de la pelota
let ballSpeedY = 5; // esta se encarga de la velocidad vertical
const ballColor = 'green'; //  es el color de la pelota

// propiedades del borde (con esta configuras las paredes es decir el marco, color tamaño etc)
const wallWidth = 10; // grosor de las paredes
const wallColor = 'black'; // conn esta pones el color de las paedes

// dibujar, mostrar la pelota 

function drawBall() {
  ctx.beginPath(); // con esta diseñas y muestras la pelota
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI); // diseñas y muestras
  ctx.fillStyle = ballColor; // funsion para e color de la pelota
  ctx.fill(); // rellena la pelota con el color
  ctx.closePath(); // fin del diseño, o dinujo
}

// esta se encarga de dibujar y mostrar las paredes

// no hay que confundirlo, ya que este es para mostrar y el otro es para configurar las paredes


  function drawWalls() {
  ctx.fillStyle = wallColor; // color de las paredes
  ctx.fillRect(0, 0, canvas.width, wallWidth); // pared de arriva o superior
  ctx.fillRect(0, canvas.height - wallWidth, canvas.width, wallWidth); // pared de abajo o inferior
  ctx.fillRect(0, 0, wallWidth, canvas.height); // pared isquierda
  ctx.fillRect(canvas.width - wallWidth, 0, wallWidth, canvas.height); //pared derecha
}

// esta se encarga del movimiento de la pelota en x y y(no tocar)
function moveBall() {
  ballX += ballSpeedX; 
  ballY += ballSpeedY; 

  // esta se encarga del rebote de la pelota y cambio de direccion cada ves que hace un rebote
  if (ballX - ballRadius < wallWidth || ballX + ballRadius > canvas.width - wallWidth) {
    ballSpeedX = -ballSpeedX; // cambia en horizontal
  }
  if (ballY - ballRadius < wallWidth || ballY + ballRadius > canvas.height - wallWidth) {
    ballSpeedY = -ballSpeedY; // cambia en vertical
  }
}

// bucle, para que se repita una y otra vez se encarga de que se repita cada funicion de nuevo por ejemplo la de las paredes se pone, para que se repita


function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // se encarga de limpiar el canvas
  drawWalls(); //dibuja las paredes
  drawBall(); // dibuja la pelota
  moveBall(); // mueve la pelota y verifica los choquez
  requestAnimationFrame(gameLoop); // solicita para que  se repita de nuevo
}

// inicia el juego
gameLoop();
