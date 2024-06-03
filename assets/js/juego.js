/**
 * C -> Clubs
 * D -> Diaminds
 * H -> Hearts
 * S -> Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

// Esta función crea una nueva baraja
const crearDeck = () => {
    
  for(let i = 2; i <= 10; i++) {
    for(let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for(let tipo of tipos) {
    for(let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
}

crearDeck();

// Esta función nos permite tomar una carta
const pedirCarta = () => {
  if(deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  let carta = deck.shift();
  return carta;
}

pedirCarta();

const valorCarta = (carta) => {
  let valor = carta.substring(0, carta.length - 1);

  if(isNaN(valor)) {
    if(valor === especiales[0]) {
      valor = 1;
    } else if(valor === especiales[1]) {
      valor = 11;
    } else if(valor === especiales[2]) {
      valor = 12;
    } else {
      valor = 13;
    }
  }
  return valor * 1;
}

let valorCard = valorCarta('KD');
console.log(valorCard);
