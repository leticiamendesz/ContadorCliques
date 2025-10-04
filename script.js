let contador = 0;

const botao = document.getElementById('botao');
const display = document.getElementById('contador');

botao.addEventListener('click', () => {
  contador++;
  display.textContent = contador;
});
