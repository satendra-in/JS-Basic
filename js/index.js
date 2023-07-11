let turn = 'O';
let chance = 0;
const data = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let div00 = document.getElementById('00');
let div01 = document.getElementById('01');
let div02 = document.getElementById('02');
let div10 = document.getElementById('10');
let div11 = document.getElementById('11');
let div12 = document.getElementById('12');
let div20 = document.getElementById('20');
let div21 = document.getElementById('21');
let div22 = document.getElementById('22');

const check = (divBox, turn) => {
    let id = divBox.id;
    let row = Number.parseInt(id[0])
    let col = Number.parseInt(id[1])
    data[row][col] = turn;
    if(++chance >= 5){
        console.log(chance)
        if(data[(row+1)%3][col] === turn && data[(row+2)%3][col] === turn) return true;
        if(data[row][(col+1)%3] === turn && data[row][(col+2)%3] === turn) return true;
        if(id === '00' || id === '20' || id === '02' || id === '11' || id === '22'){
            if(data[(row+1)%3][(col+1)%3] === turn && data[(row+2)%3][(col+2)%3] === turn) return true;
            if(id === '20' || id === '02' || id === '11'){
                if(data[2][0] === turn && data[0][2] === turn && data[1][1] === turn) return true;
            }
        }
    }
    if(chance === 9){
        alert('Match draw... Please refresh page for start again.')
        let arr = document.getElementsByClassName('item');
        for(let a of arr){
            a.innerHTML = '';
        }
    }
    return false;
}

const placeItem = (divBox) => {
    item = document.createElement('p');
    item.innerHTML = turn;
    item.classList.add('item');
    divBox.appendChild(item);
    if(check(divBox, turn)){
        alert('Congratulations! Player ' + turn + ' won... please refresh Page to restart')
        let arr = document.getElementsByClassName('item');
        for(let a of arr){
            a.innerHTML = '';
        }
    }
    turn = (turn === 'O')? 'X': 'O';
    item = document.getElementById('turn');
    
    item.innerHTML = 'Turn for: ' + turn;
}

const clickHandler = (e) => {
    placeItem(e.currentTarget);
    e.currentTarget.removeEventListener('click', clickHandler);
}

div00.addEventListener('click', clickHandler)
div01.addEventListener('click', clickHandler)
div02.addEventListener('click', clickHandler)
div10.addEventListener('click', clickHandler)
div11.addEventListener('click', clickHandler)
div12.addEventListener('click', clickHandler)
div20.addEventListener('click', clickHandler)
div21.addEventListener('click', clickHandler)
div22.addEventListener('click', clickHandler)
