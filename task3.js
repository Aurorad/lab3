"use strict";
function PlayTheBottleGame () {
    document.getElementById('BottleGame').innerHTML = BottleGame();
}

function GetNumberOfBottles(){
    let numberOfBottles = prompt('Введіть кількість пляшок', '50');
    if( isNaN(+numberOfBottles) ) {
        alert('Ви ввели не число. Спробуйте ще раз.');
        numberOfBottles = GetNumberOfBottles();
    }
    return numberOfBottles;
}

function BottleGame(){
    let numberOfBottles = GetNumberOfBottles();
    let text = '<strong>Гра "Скільки лишилось пляшок на стіні"</strong><br/>';
    while(numberOfBottles > 0) {
        text += numberOfBottles + ' пляшок стоїть на стіні, одна упала і залишилось '
            + --numberOfBottles +'<br/>';
    }
    text += 'жодної!';
    return text;
}
