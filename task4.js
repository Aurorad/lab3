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
    document.getElementById('OutputArray').innerHTML = `Пункт 1: ${sum} <br/>Пункт 2:<br/> ${showArray}`;
}

function getSumOfUSD(array) {
    return array.filter(element => element.type === 'USD' && element.value < 100).
        map (arr => arr.value).reduce((sum, current)=>sum+current, 0);
}

function getArrayOfEUR(array) {
    let arr1 = array.filter(element => element.type==="EUR")
        .map(element => {return {value: element.value*2, type: element.type}});
    let showArray= '';
    arr1.forEach(element => {
        showArray += `${element.value} ${element.type} <br/>`;
    });
    return showArray;
}


