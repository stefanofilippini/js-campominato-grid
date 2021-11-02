console.log('OK JS');

const body = document.querySelector('.body')

const container = document.createElement('div')
container.classList.add ('container')

body.append(container)

for (let i = 0; i < 100; i++) {
    const square = createGridSquare(100, 10);
    container.append(square);
}

function createGridSquare(num, cells) {
    // pari o dispari
    // operatore ternario
    const type = (num % 2 === 0) ? 'even' : 'odd';

    // creiamo nodo .square
    const node = document.createElement('div');
    node.classList.add('square', `square-${type}`);
    node.style.width = `calc( 100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;

    //nodo span per il testo
    const span = document.createElement('span');
    span.append(num);
    node.append(span);

    return node;
}