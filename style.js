const btnVerMas = document.getElementById('btn-ver-mas');
const descripcion = document.querySelector('.descripcion');

btnVerMas.addEventListener('click', function() {
  if (descripcion.classList.contains('oculto')) {
    descripcion.classList.remove('oculto');
    btnVerMas.textContent = 'Ver menos';
  } else {
    descripcion.classList.add('oculto');
    btnVerMas.textContent = 'Ver más';
  }
});
