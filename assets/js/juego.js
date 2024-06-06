/**
 * C -> Clubs
 * D -> Diaminds
 * H -> Hearts
 * S -> Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');

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

const valorCarta = (carta) => {
  let valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor)) 
    ? (valor === 'A') ? 11 : 10
    : valor * 1;
}

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;
  
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugador.append(imgCarta);
  
  if(puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
  } else if(puntosJugador === 21) {
    console.warn('21. genial!');
    btnPedir.disabled = true;
  }
})
