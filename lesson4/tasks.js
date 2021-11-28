const rain = Math.random() > 0.5 ? 1 : 0;
if (rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
}

if (rain === 0) {
    console.log("Дождя нет!");
}

// const rain = (min, max) => {   const sum = Math.round(Math.random(min, max))    if (sum === 1) {     return console.log("Пошёл дождь. Возьмите зонт!");   }   return console.log("Дождя нет!"); }    rain(0, 1)
// 3я задача

const ball = 265;

const matematika = Number(prompt('Введите кол-во баллов по математике:'));
const rus = Number(prompt('Введите кол-во баллов по русскому:'));
const informatika = Number(prompt('Введите кол-во баллов по информатике:'));

let summa = +matematika + rus + informatika;
// console.log(matematika + rus + informatika);
    
if (summa >=  ball) {
    console.log("Поздравляю, вы поступили на бюджет!")
} else {
    console.log("К сожалению, вы не поступили на бюджет!");
}