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

  mameVitaza();
};

const selectSymbol2 = document.querySelectorAll('.btn');
selectSymbol2.forEach((btn) => btn.addEventListener('click', selectSymbol));

//////////////////////////////////////////////////////////////////////////
const symbol = document.querySelectorAll('.board__field');
const hernePolicko = [...symbol].map((item) => {
  if (item.classList.contains('board__field--circle')) {
    return 'o';
  } else if (item.classList.contains('board__field--cross')) {
    return 'x';
  } else {
    return '_';
  }
});

const mameVitaza = async () => {
  const symbol = document.querySelectorAll('.board__field');
  const hernePolicko = [...symbol].map((item) => {
    if (item.classList.contains('board__field--circle')) {
      return 'o';
    } else if (item.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const winner = findWinner(hernePolicko);
  if (winner === 'o' || winner === 'x') {
    alert(`Vyhral hráč so symbolom "${winner.toUpperCase()}"!`);
    location.reload();
  } else if (winner === 'tie') {
    alert('Hra sa skončila nerozhodne.');
  }

  if (winner === null && currentPlayer === 'cross') {
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: symbol,
          player: 'x',
        }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const index = symbol[x + y * 10];
    index.click();
  }
};
