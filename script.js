
function trocarFoto(src) {
    var foto = document.getElementById('foto-denuncia');
    foto.src = src;
  }


/*jogo da memória*/ 

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

const levelSelection = document.getElementById('level-selection');
const easyButton = document.getElementById('easy-button');
const mediumButton = document.getElementById('medium-button');
const hardButton = document.getElementById('hard-button');
const gameboard = document.getElementById('gameboard');

const levels = [
  { name: 'Fácil', size: 6 },
  { name: 'Médio', size: 12 },
  { name: 'Difícil', size: 18 }
];

function createCardsArray(size) {
  const pairs = size / 2;
  const cards = [];
  for (let i = 1; i <= pairs; i++) {
    cards.push({ value: i, flipped: false, matched: false });
    cards.push({ value: i, flipped: false, matched: false });
  }
  return cards;
}

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function renderGameboard(cards) {
  gameboard.innerHTML = '';
  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.index = index;
    if (card.flipped) {
      cardElement.classList.add('flipped');
    }
    if (card.matched) {
      cardElement.classList.add('matched');
    }
    const cardImage = document.createElement('img');
    cardImage.src = `https://picsum.photos/id/${card.value + 10}/200/200`;
    cardImage.alt = `Imagem ${card.value}`;
    cardElement.appendChild(cardImage);
    cardElement.addEventListener('click', handleCardClick);
    gameboard.appendChild(cardElement);
  });
}

function handleCardClick() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
    this.classList.add('flipped');
    flippedCards.push(this.dataset.index);
    if (flippedCards.length === 2) {
      const card1 = cards[flippedCards[0]];
      const card2 = cards[flippedCards[1]];
      if (card1.value === card2.value) {
        card1.matched = true;
        card2.matched = true;
        matchedCards += 2;
        if (matchedCards === cards.length) {
          setTimeout(() => alert('Parab
