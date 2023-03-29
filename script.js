const buttons = document.querySelectorAll('.lista-denuncia button');
const imagemGrande = document.querySelector('.imagem-grande img');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    imagemGrande.src = `imagens/denuncia-${index}.jpg`;
  });
});