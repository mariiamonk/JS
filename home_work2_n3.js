// задание 3 //на цикл while

// Попросите пользователя ввести число. Затем используя цикл while, умножайте это число на 2 до тех пор, пока оно не превысит 1000. Выведите на экран итоговое число и количество итераций (сколько раз вы умножили исходное число на 2).
let x = 0
let count = 0

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number\n", function (x) {
    console.log('Your number is' ,x)
    while(x < 1000){
        x *= 2
        count++
    }
    console.log('Result is' ,x, '\nCount:', count)
    rl.close
    process.exit(0);
});