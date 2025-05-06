// // 閉包就是function裡面的function
// function calllmethod() {
//     let counter = 0;
//     return function () {
//         counter++;
//         return counter;
//     }
// }
//
// let add = calllmethod();
// add(); // 呼叫內層function
// add();
// add();
// add();
// console.log(add());

//
// "use strict"
// // 把變數的宣告移到前面去提升
// x = 5;
// console.log(x);
//
// var x;
// console.log(10);


//Callback 函數在 JavaScript 中是一種將函數作為參數傳遞給另一個函數，並在特定時刻或事件發生後執行的函數。
function calculate(num1, num2, displayLang) {
    let sum = num1 + num2; // 當自己的函數執行完
    displayLang(sum);  // 在執行callback函數; 呼叫函式，呼叫的時機是主函式決定
}

function resultInEng(sum) {
    console.log("The result is " + sum);
}

function resultInCh(sum) {
    console.log("結果是: " + sum);
}

calculate(1, 1, resultInEng);
calculate(1, 1, resultInCh);




// 一個函數calculator 可以接收另一個函數做為參數 callback
// calculator會做加法運算，然後把結果傳給callback函數
// callback函數會根據傳入的語言參數來決定結果的語言
// 一個函式顯示英文結果
// 一個函式顯示中文結果
// 這個範例中，calculator 函數接收兩個數字和一個回調函數作為參數。
function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}
function displayResultInEnglish(result) {
    console.log("The result is: " + result);
}
function displayResultInChinese(result) {
    console.log("結果是: " + result);
}
calculator(1, 2, displayResultInEnglish);
calculator(1, 2, displayResultInChinese);


