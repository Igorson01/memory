const cards = document.querySelectorAll('.cards');
const images = [
  'eren.jpeg',
  'hange.jpeg',
  'jean.jpeg',
  'levi.jpeg',
  'Mikasa.jpeg',
  'reiner.jpeg',
  'sasha.jpeg',
  'eren.jpeg',
  'hange.jpeg',
  'jean.jpeg',
  'levi.jpeg',
  'Mikasa.jpeg',
  'reiner.jpeg',
  'sasha.jpeg',
  'armin.jpeg',
  'armin.jpeg'

];
let card1 = null;
let card2 = null;

cards.forEach(card => card.addEventListener('click', clickCard));


function clickCard() {
  if (this === card1) return;
  this.classList.add('click');
  //console.log('click')
  //console.log('karta1')
  if (!card1) {
    card1 = this;
    return;
  }
  card2 = this;
  //console.log('karta2')
  if (getPair(card1, card2)) {
    card1.removeEventListener('click', clickCard);
    card2.removeEventListener('click', clickCard);
    
  }
  card1 = null;
  card2 = null;
}
function getPair(card1, card2) {
  if (card1.querySelector('img').src === card2.querySelector('img').src) { 
    console.log('para')
    return true; 
  } else { 
    setTimeout(function() {
      showFront(card1, card2); 
    }, 1000); 
    console.log('meh')
    return false;  
  }
}
function showFront(card1, card2) {
  card1.classList.remove('click'); 
  card2.classList.remove('click');
  console.log('remove')
}

cards.forEach(card => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  card.querySelector(' img').src = randomImage;
  images.splice(randomIndex, 1);
  console.log('shufle')
});


















