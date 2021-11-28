'use strict';

const productName = prompt('Напиши наименование товара');	

const count = Number(prompt('количества товара, сколько надо-то? пиши цифрами')); 
	
const productCategory = prompt('а категория товара какая?');

const price = Number(prompt('назови цену, договоримся')); 

if (count > 0 && price > 0) {
console.log(`На складе ${count} единицы товара "${productName}" на сумму ${price * count}`);
}
    else {
    console.log("Вы ввели некорректные данные")
    };


    
    const bankomat = 100;
    const price = Number(prompt("сколько денег он хочет снять?")); 
    // 100
    if (price >100) {
        const cash  = (price / 100);
        console.log("Возьмите деньги!");
    } else {
        console.log("Сумма менее 100 руб!");
    }

    // const num = Number.isInteger(333 / 100) 
    // const notZero = 3.3 !== 0; 




// console.log(typeof productName);
// console.log(typeof count);
// console.log(typeof productCategory); 
// console.log(typeof price);
//
// console.log(`На складе ${count} единицы товара "${productName}" на сумму ${price * count}`);


// операторы сравнения if else
// let money = 301;
// if (money > 300) {
//     console.log('денеги есть');    
// }

// if (money <= 300 && money > 0) {
//     console.log('денег мало');
// }

// if (money <= 300 && money > 0) {
//     console.log('денег нет');
// }


// если условие if else 
// let clientStatus = 'Приятель';
// let price = 1000;
// let discount = 0;
// switch (clientStatus) {
//     case "Приятель":
//         discount = price * 0.05;
//         break; // останавливает
//     case "Друг":
//         discount = price * 0.08;
//         break;
//     case "Лучший друг":
//         discount = price * 0.01;
//         break;
//     default:
//         discount = 0;    
//         break;
// }

// const totalPrice = price - discount;
// console.log('totalPrice: ', totalPrice);








