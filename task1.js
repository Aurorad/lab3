"use strict";

function startTheGame() {
    let gameStart = confirm('Розпочнемо гру "передбачувач майбутнього"?');
    if(!gameStart) return;
    let user = {};
    Sex(user);
    Name(user);
    Marriage(user);
    Position(user);
    Country(user);
    Result(user);
}

function Name (user) {
    user['name'] = prompt('Введіть своє ім`я', '');
}

function Sex(user){
    user['sex'] = prompt('Введіть свою стать: ', 'Чоловік');
}

function Marriage(user){
    if(confirm('Чи хочете Ви укласти шлюб?')){
        Partner(user);
    }
}

function Partner(user){
    switch (user['sex']) {
        case 'Чоловік':
            user['partner'] = prompt(`Введіть ім'я своєї майбутної дружини: `, 'Маруся');
            break;
        case 'Жінка':
            user['partner'] = prompt(`Введіть ім'я свого майбутного чоловіка: `, 'Іванко');
            break;
        default:
            user['partner'] = prompt(`Введіть ім'я свого майбутного партнера: `, '');
            break;
    }
    NumberOfChildren(user);
}

function NumberOfChildren(user) {
    user['numberOfChildren'] = prompt('Введіть к-сть дітей', '0');
}

function Position(user) {
    user['position'] = prompt(`Введіть свою поточну посаду`, ``);
    if (confirm(`Чи хочете ви змінити роботу?`)) {
        user['position'] = prompt(`Яку посаду Ви хочете займати?`, '');
    }
}

function Country (user) {
    user['country'] = prompt(`Введіть назву країни, в якій ви проживаєте`,
        'Україна');
    if(confirm('Чи хотіли б ви переїхати в іншу країну')){
        user['country'] = prompt(`Введіть назву країни, в якій ви хочете проживати`,
            'Німеччина');
    }
}

function Result(user) {
    let result = user['name'] + '!\n';
    if (user['partner'] !== undefined){
        switch (user['sex']) {
            case 'Чоловік':
                result += `Ви укладете шлюб з жінкою на ім'я ` + user['partner']+'. ';
                break;
            case 'Жінка':
                result += `Ви укладете шлюб з чоловіком на ім'я ` + user['partner']+'. ';
                break;
            default:
                result += `Вашого партнера буде звати ` + user['partner'] +'. ';
                break;
        }

        if (user['numberOfChildren'] > 0) {
            if (user['numberOfChildren'] == 1) {
                result += 'У Вас буде 1 дитина.';
            }
            else {
                result += 'У Вас буде ' + user['numberOfChildren'] + ' дітей.';
            }
        }
    }
    result += '\nВаша країна проживання - ' + user['country'] + ' і Ви займатимите посаду '
        + user['position'] +'.';
    alert(result);
}
