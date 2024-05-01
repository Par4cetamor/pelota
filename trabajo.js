// Configuración del canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Propiedades de la pelota
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
const ballRadius = 10;
let ballSpeedX = 5;
let ballSpeedY = 5;
const ballColor = 'green';

// Propiedades de las paredes
const wallWidth = 10;
const wallColor = 'black';

// Dibujar la pelota
function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

// Dibujar las paredes
function drawWalls() {
  // Arriba
  ctx.fillStyle = wallColor;
  ctx.fillRect(0, 0, canvas.width, wallWidth);
  // Abajo
  ctx.fillRect(0, canvas.height - wallWidth, canvas.width, wallWidth);
  // Izquierda
  ctx.fillRect(0, 0, wallWidth, canvas.height);
  // Derecha
  ctx.fillRect(canvas.width - wallWidth, 0, wallWidth, canvas.height);
}

// Actualizar la posición de la pelota
function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Detectar colisiones con las paredes
  if (ballX - ballRadius < wallWidth || ballX + ballRadius > canvas.width - wallWidth) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballY - ballRadius < wallWidth || ballY + ballRadius > canvas.height - wallWidth) {
    ballSpeedY = -ballSpeedY;
  }
}

// Bucle de animación
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWalls();
  drawBall();
  moveBall();
  requestAnimationFrame(gameLoop);
}

// Iniciar la animación
gameLoop();
