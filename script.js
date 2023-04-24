
function trocarFoto(src) {
    var foto = document.getElementById('foto-denuncia');
    foto.src = src;
  }

  

  const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.querySelector('img').src === secondCard.querySelector('img').src;

  isMatch ? disableCards() : unflip