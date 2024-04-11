let naTahu = 'Alena';
let currentPlayer = 'circle';

const selectSymbol = (event) => {
  const btn = event.target;
  btn.classList.add('board__field');
  const symbol = document.querySelector('.circle_button');



 if (naTahu === 'Alena')    {
    naTahu = 'Lama';
    btn.classList.add('board__field--circle');
    symbol.src = 'img/cross.svg';
    
  } else {
    btn.classList.add('board__field--cross');
    naTahu = 'Alena';
    symbol.src = 'img/circle.svg';
    
  } event.target.disabled = true; 

 
};

document.querySelector('td:nth-child(5) button');
