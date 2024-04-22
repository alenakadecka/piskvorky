import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let naTahu = 'Alena';
let currentPlayer = 'circle';

const selectSymbol = (event) => {
  const btn = event.target;
  btn.classList.add('board__field');
  const symbol = document.querySelector('.circle_button');

  if (naTahu === 'Alena') {
    naTahu = 'Lama';
    btn.classList.add('board__field--circle');
    symbol.src = 'img/cross.svg';
  } else {
    btn.classList.add('board__field--cross');
    naTahu = 'Alena';
    symbol.src = 'img/circle.svg';
  }
  event.target.disabled = true;
};

const selectSymbol2 = document.querySelectorAll('.btn');
selectSymbol2.forEach(addEventListener('click', selectSymbol));

/////////////////////////////////6 tahov/////////////////////////////////////////

let tahyHracov = [];

selectSymbol{
if (selectSymbol2.length < 6) {
 tahyHracov.push(selectSymbol2);
}
}

if 
