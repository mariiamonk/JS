// задание 1

// Создайте программу для оценки времени года на основе текущего месяца и температуры. Запросите у пользователя номер текущего месяца (от 1 до 12) и температуру на улице (в градусах Цельсия). Используя вложенные условные операторы, выведите, к какому времени года относится введенный месяц:

// Если месяц - декабрь, январь или февраль, выведите "Зима".
// Если температура -25 и ниже градусов, добавьте к времени года " (холодная зима)".
// Если месяц - март, апрель или май, выведите - "Весна".
// Если температура меньше 15 градусов, добавьте к времени года " (прохладная весна)"
// Если месяц - июнь, июль или август, выведите "Лето".
// Если температура больше или равна 30 градусов,  добавьте к времени года " (жаркое лето)".
// Если месяц - сентябрь, октябрь или ноябрь, выведите "Осень".
// Если температура меньше 0 градусов, добавьте к времени года " (прохладная осень)".

let month = ''
let temp = ''
const reg_mon = /Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter month(Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec):\n", function (month) {
    let result = month.match(reg_mon)
    if(result == null){
        console.log('Wrong!')  
        process.exit(0);
    }

    rl.question("Enter temperature:\n", function (temp) {
            if(temp<-100||temp>100){
                console.log('Wrong!')  
                process.exit(0);
            }

        if(month==('Dec')||month==('Jan')||month==('Feb')){
            if(temp<=-25){
                console.log('It\'s cold winter')
            }else{
              console.log('It\'s winter')  
            }
        }else if(month==('Mar')||month==('Apr')||month==('May')){
            if(temp<15){
                console.log('It\'s cool spring')
            }else{
              console.log('It\'s spring')  
            }
        }else if(month==('Jun')||month==('Jul')||month==('Aug')){
            if(temp>=30){
                console.log('It\'s hot summer')
            }else{
              console.log('It\'s summer')  
            }
        }else{
            if(temp<0){
                console.log('It\'s cool fall')
            }else{
              console.log('It\'s fall')  
            }
        }  
        rl.close
        process.exit(0);
    });
});

