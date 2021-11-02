console.log('OK JS');

const setBtn = document.querySelector('#set-dim');
const body = document.querySelector('.body')
const dimensionLevel = document.getElementById('dimensions')

setBtn.addEventListener('click', () => {
    body.innerHTML = '';

    const container = document.createElement('div')
    container.classList.add ('container')

    body.append(container)

    const grid_dim = dimensionLevel.value;
    let cellsNumber
    let cellPerSide

    switch (grid_dim) {
        case '3':
            cellsNumber = 100;
            cellPerSide = 10;
            break;
        
        case '2':
            cellsNumber = 81;
            cellPerSide = 9;
            break;

        case '1':
            cellsNumber = 49;
            cellPerSide = 7;
            break;
    }

    for (let i = 1; i <= cellsNumber; i++) {
        const square = createGridSquare(i, cellPerSide);
        container.append(square);

        square.addEventListener('click', function() {
        this.classList.add('active')});
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
});