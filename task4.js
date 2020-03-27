"use strict";

function GetResultOfTask4(){
    let array = [
        {value: 100, type: 'USD'},
        {value: 215, type: 'EUR'},
        {value: 7, type: 'EUR'},
        {value: 99, type: 'USD'},
        {value: 354, type: 'USD'},
        {value: 12, type: 'EUR'},
        {value: 77, type: 'USD'},
    ];
    let sum = getSumOfUSD(array);
    let showArray = getArrayOfEUR(array);
    let message = `Пункт 1:`+sum + "<br/>Пункт 2:<br/>" + showArray;
    document.getElementById('OutputArray').innerHTML = message;
}

function getSumOfUSD(array) {
    let sum = 0;
    array.forEach(element=>{
        if (element.type === 'USD' && element.value < 100) {
            sum += element.value;
        }
    });
    return sum;
}

function getArrayOfEUR(array) {
    let arr2 = new Array();
    array.forEach(element=>{
        if (element.type === 'EUR') {
            element.value *= 2;
            arr2.push(element);
        }
    });
    let showArray= '';
    arr2.forEach(element => {
        showArray += element.value + ' ' + element.type + '<br/>';
    });
    return showArray;
}


