const cards = ['01', '02', '11', '12', '21', '22', '31', '32', '41', '42', '51', '52', '61', '62', '71', '72', '81', '82', '91', '92'];

function getRandom() {
    return Math.floor(Math.random() * 20) // 0~19까지 출력
}

function getCards(arr) {
    let result = [];
    result.push(arr[getRandom()]);
    let card = arr[getRandom()];
    while (card === result[0]) {
        card = cards[getRandom()];
    }
    result.push(card);
    return result;
}

// 1. 삼팔광땡
function isSamPal(arr) {
    if (arr.includes('21') && arr.includes('71')) {
        return true;
    }
    return false;
}

// 2. 광땡
function isGwang(arr) {
    if (!arr.includes('01')) {
        return false;
    }
    if (arr.includes('21') || arr.includes('71')) {
        return true;
    }
}

// 3. 땡
function isDdang(arr) {
    if (arr[0][0] === arr[1][0]) {
        return (Number(arr[0]) / 100) + 8;
    }
    return false;
}

// 4. 알리
function isAli(arr) {
    if (arr[0][0] === '0' || arr[1][0] === '0') {
        if (arr[0][0] === '1' || arr[1][0] === '1') {
            return true;
        }
    }
    return false;
}

// 5. 독사
function isDoksa(arr) {
    if (arr[0][0] === '0' || arr[1][0] === '0') {
        if (arr[0][0] === '3' || arr[1][0] === '3') {
            return true;
        }
    }
    return false;
}

// 6. 구삥
function isGubbing(arr) {
    if (arr[0][0] === '0' || arr[1][0] === '0') {
        if (arr[0][0] === '8' || arr[1][0] === '8') {
            return true;
        }
    }
    return false;
}

// 7. 장삥
function isJangbbing(arr) {
    if (arr[0][0] === '0' || arr[1][0] === '0') {
        if (arr[0][0] === '9' || arr[1][0] === '9') {
            return true;
        }
    }
    return false;
}

// 8. 장사
function isJangsa(arr) {
    if (arr[0][0] === '3' || arr[1][0] === '3') {
        if (arr[0][0] === '9' || arr[1][0] === '9') {
            return true;
        }
    }
    return false;
}

//9. 세륙
function isSyeruk(arr) {
    if (arr[0][0] === '3' || arr[1][0] === '3') {
        if (arr[0][0] === '5' || arr[1][0] === '5') {
            return true;
        }
    }
    return false;
}

// //12. 망통
// function isMangtong(arr) {
//     if (arr[0][0] === '1' || arr[1][0] === '1') {
//         if (arr[0][0] === '7' || arr[1][0] === '7') {
//             return true;
//         }
//     }
//     return false;
// }

//10 & 11 & 12 갑오 & 끗 & 망통 
function isGget(arr) {
    let n = (+arr[0][0] + +arr[1][0] + 2).toString();
    let lastNum = n[n.length - 1];
    let result = (Number(lastNum) / 100) + 1;
    return result;
}

function countScore(arr) {
    if (isSamPal(arr)) { return 10 }
    if (isGwang(arr)) { return 9 }
    if (isDdang(arr)) { return isDdang(arr) }
    if (isAli(arr)) { return 7 }
    if (isDoksa(arr)) { return 6 }
    if (isGubbing(arr)) { return 5 }
    if (isJangbbing(arr)) { return 4 }
    if (isJangsa(arr)) { return 3 }
    if (isSyeruk(arr)) { return 2 }
    // if (isMangtong(arr)) { return 1 }
    return isGget(arr);
}

function startGame() {
    let playerA = getCards(cards);
    let playerB = getCards(cards);
    let resultA = countScore(playerA);
    let resultB = countScore(playerB);
    console.log(`A ${resultA} : B ${resultB}`)
    if (resultA > resultB) { console.log('플레이어A 승') }
    else if (resultA < resultB) { console.log('플레이어B 승') }
    else if (resultA === resultB) { console.log('동점') }
}

startGame()