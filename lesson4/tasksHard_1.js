const client = Number(prompt('Какой ваш доход?')); 
let nalog = 0;

if (client < 15000) {
    nalog = client * 0.2;
    console.log("налог 13 % от суммы " + client)
};

if (client >= 15000 && client < 50000) {
    nalog = client * 0.2;
    console.log("налог 20 % от суммы " + client)
};

if (client >= 50000) {
    nalog = client * 0.3;
    console.log("налог 30 % от суммы " + client)
};
console.log("Ваш налог составил: " + nalog + "  рублей");
