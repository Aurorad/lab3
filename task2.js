"use strict";

function Triangle() {
    document.getElementById('Triangle').innerHTML = CreatingTriangle();
}

function GetSize(){
    let size = prompt('Введіть розмірність трикутника Паскаля', '6');
    if (isNaN (+size) ) {
        alert('Ви ввели не число. Спробуйте ще раз.');
        size = GetSize();
    }
    else if (size > 25) {
        alert('Ви ввели завелике число. Спробуйте ще раз.');
        size = GetSize();
    }
    return size;
}

function CreatingTriangle() {
    let message = 'Трикутник Паскаля<br/>';
    let size = GetSize();
    let arr = [1];
    message +=  AddToMessage(arr);
    for(let i=1; i<=size; i++){
        arr = CreatinRow(arr);
        message +=  AddToMessage(arr);
    }
    return message;
}

function CreatinRow(arr){
    let newRow = [1];
    if (arr.length > 1) {
        for(let i=0; i<arr.length-1; i++){
            newRow.push(arr[i]+arr[i+1]);
        }
    }
    newRow.push(1);
    return newRow;
}

function AddToMessage (array) {
    let s = '<br/>';
    array.forEach(element => s += element + ' ');
    return s;
}