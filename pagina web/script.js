document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('mensaje-enviado').textContent = "Gracias por tu mensaje, nos pondremos en contacto pronto.";
  this.reset();