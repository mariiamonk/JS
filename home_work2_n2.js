// задание 2 // на цикл for

// Напишите программу, которая будет запрашивать у пользователя число X. Затем программа должна подсчитать количество четных и нечетных чисел в диапазоне от 1 до X включительно и вывести результат.

let X = 0
let num_ev = 0
let num_odd = 0

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number\n", function (X) {
    console.log('Your number is' ,X)
    for(let i = 1; i <= X;i++){
        if(i%2 == 0){
            num_ev++
        }else{
            num_odd++
        }
    }
    console.log('Number of even is' ,num_ev,'\nNumber of odd', num_odd)
    rl.close
    process.exit(0);
});
