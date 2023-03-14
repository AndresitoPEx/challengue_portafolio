const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', downloadCV);

function downloadCV() {
  // Crea un enlace temporal para descargar el archivo
  const link = document.createElement('a');
  link.href = 'ruta/al/cv.pdf';
  link.setAttribute('download', 'MiCV.pdf');

  // Agrega el enlace temporal a la página
  document.body.appendChild(link);

  // Dispara el click en el enlace para iniciar la descarga
  link.click();

  // Elimina el enlace temporal de la página
  document.body.removeChild(link);
}