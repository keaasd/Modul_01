{
    const rain = Math.round(Math.random(0, 1));
    console.log(rain); 

    if (rain === 1) {
        console.log("Пошёл дождь. Возьмите зонт!")
    } else {
        console.log("Дождя нет!")
    }
}
// const rain = (min, max) => {   const sum = Math.round(Math.random(min, max))    if (sum === 1) {     return console.log("Пошёл дождь. Возьмите зонт!");   }   return console.log("Дождя нет!"); }    rain(0, 1)

// Math.random() > 0.5 ? 1 : 0;
// 3я задача
{
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
}

    

const price = Number(prompt("сколько денег он хочет снять?")); 

if  ((price % 100) === 0) { 
    console.log('Возьмите ваши деньги');
} else {
    console.log('банкомат может выдавать купюры только номиналом 100р');
}

// if (price > 100) {
    
// }



// console.log((price % 100) === 0);

// else {
//     console.log("Сумма менее 100 руб!");
// }

// const num = Number.isInteger(333 / 100) 
// const notZero = 3.3 !== 0; 

// (price >100) {
//     const cash  = (price % 100 == 0);  
//     console.log("Возьмите деньги!");