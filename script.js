let naTahu = 'Alena';

const selectSymbol = (event) => {
  const btn = event.target;
  btn.classList.add('brn-symbol--selected');
  
  if (naTahu === 'Alena') { 
    naTahu = 'Lama';
    btn.textContent = '❌';
  } else {
    btn.textContent = '⭕';
    naTahu = 'Alena';
  }
}
