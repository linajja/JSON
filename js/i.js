// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//1

// for (let i = 0; i < 3; i++) {
//     console.log("Afrika");
// }

//2

// for (let i = 0; i < 3; i++) {

//     console.log(rand(3, 13));

// // }

// //3

// // for (let i = 0; i < 3; i++) {
// //     console.log(8 + 5);
// // }

// //4

// // for (let i = 0; i < 15; i++) {
// //     let sk1 = rand(5, 15);
// //     let sk2 = rand(5, 15);
// //     console.log(sk1 + "*" + sk2 + "=" + (sk1 * sk2));
// // }

// //5

// // for (let i = 0; i < 10; i++) {

// //     let kaul = rand(1, 6);
// //     if (kaul > 3) {
// //         console.log(kaul);
// //     }
// // }

// 6

// for (let i = 0; i < 10; i++) {
//     let kaul = rand(1, 6);
//     if (kaul < 3) {
//         console.log(kaul);
//     } else {
//         console.log("Valio!");
//     }
// }

// 7

// for (let i = 0; i < 20; i++) {
//     let sk = rand(5, 105);
//     if ((sk % 2) === 0) {
//         console.log(sk);
//     } else { }
// }

// 8

// let suma = 0;

// for (let i = 0; i < 20; i++) {
//     let sk = rand(5, 105);
//     suma = suma + sk;
//     console.log(sk);
// }

// console.log(suma);


// 9

// let a = "";

// for (let i = 0; i < 400; i++) {
//     let sk = "*";
//     a = a + sk;
// }
// console.log(a);

// 10

// let a = 0;
// let kiek = 0;

//    let sk = rand(5, 105);
//   for (let i = 0; i < 20; i++) {
//    if (sk > 50) {
//         a = a + sk;
//         kiek++
//         console.log(sk);
//     } else { }
// }
// console.log(a);
// console.log(kiek);

// 11

// let a1 = 0;
// let a2 = 0;

// for (let i = 0; i < 20; i++) {

//     let sk = rand(5, 105);
//     if (sk % 2 == 0) {
//         a1 = a1 + sk;
//     } else {
//         a2 = a2 + sk;
//     }
// }
// console.log(a1, a2);

// 12

// let a = 0;


// for (let i = 0; i < 20; i++) {

//     let sk = rand(5, 105);
//     a = a + sk;
//     if (a <= 500) {
//         console.log(a);
//     } else {
//         break;
//     }
// }

//13

// for (let y = 0; y < 5; y++) {

//     let a = "";
//     for (let i = 0; i < 100; i++) {
//         let sk = "+";
//         a = a + sk;
//     }
//     console.log(a);
// }

// 1
// let a = 0;

// for (let i = 0; i < 20; i++) {
//     if (i === 7 || i === 13) {
//         continue;
//     } else {
//         let sk = rand(5, 105);
//         a = a + sk;
//         console.log(a);
//     }
// }


// 2
// let a = 0;

// for (let i = 0; i < 20; i++) {
//     if (i === 0 || (i = i + 3)) {
//         let sk = rand(5, 105);
//         a = a + sk;
//         console.log(a);
//     } else {
//         continue;
//     }
// }

// 3

// for (let i = 19; i >= 0; i--) {
//     console.log(i);
// }


// 4

// let cats = ['Murka', 'Pilkis', 'Keris', 'Ūkas', 'Rainis', 'Pilkis', 'Murka', 'Pilkis'];
// let kiek = 0;

// for (let i = 0; i < cats.length; i++) {
//     if (cats[i] === "Pilkis") {
//         kiek++;
//     }
// }
// console.log(kiek);

// 5

// let cats = ['Murka', 'Pilkis', 'Keris', 'Ūkas', 'Rainis', 'Pilkis', 'Murka', 'Pilkis'];
// let kiek = 0;

// for (let i = 0; i < cats.length; i++) {
//     if (cats[i] === "Murka") {
//         console.log(cats[i] + " " + i)
//     }
// }

// 6

// let cats = ['Murka', 'Pilkis', 'Keris', 'Ūkas', 'Rainis', 'Pilkis', 'Murka', 'Pilkis'];

// for (let i = 0; i < cats.length; i++) {
//     if (cats[i] === "Pilkis") {
//         cats[i] = "Zita";
//     }
// }
// console.table(cats);

// 7

// let namukas = [];
// namukas[0] = "Bebras";
// namukas[1] = "Barsukas";
// namukas.push("Bebras");
// namukas.push("Barsukas");

// console.log(namukas);

// 8

// let namukas = [];
// for (let i = 0; i < 10; i++) {
//     namukas.push("Zita");
// }
// console.log(namukas);

// 9

// let namukas = [];

// for (let i = 0; i < 10; i++) {
//     let sk = rand(11, 21);
//     namukas.push(sk);
// }
// console.log(namukas);

// let kiek = 0;
// for (let y = 0; y < namukas.length; y++) {
//     if (namukas[y] > 15) {
//         kiek++;
//     }
// }
// console.log(kiek);

// for (let x = 0; x < namukas.length; x++) {

//     let maxim = Math.max(sk);
// }
// console.log(maxim);


// let didSk = namukas[0];

// for (let z = 1; z < namukas.length; z++) {
//     if (namukas[z] > didSk) {
//         didSk = namukas[z];
//     }
// }
// console.log(didSk);


// //////////////////////////

// let maxValue;
// let maxValueIndexes = [];

// maxValue = namukas[0];
// maxValueIndexes.push(0);

// for (let i = 1; i < namukas.length; i++) {
//     if (namukas[i] > maxValue) {
//         maxValue = namukas[i];
//         maxValueIndexes = [];
//     }
//     if (namukas[i] == maxValue) {
//         maxValueIndexes.push(i);
//     }
// }
// console.log(maxValue, maxValueIndexes);

// 1

// let a = rand(5, 25);
// let b = rand(5, 25);
// let c = rand(5, 25);
// let suma = a + b + c;
// let string = " " + a + b + c + " ";
// let tarpai = a + " " + b + " " + c;
// let suSuma = a + " " + b + " " + c + " " + suma;
// console.log(suma);
// console.log(string);
// console.log(tarpai);
// console.log(suSuma);

//2

// let a = rand(5, 10);
// console.log(a);

//3

// let a = "Labas";
// for (let i = 0; i < 5; i++) {
//     console.log(a)
// }

//3-1

// let a = 0;
// let b = "Labas"
// while (a < 5) {
//     a++;
//     console.log(b);
// }

//4

// let a = rand(5, 10);

// for (let i = 0; i < 7; i++) {
//     console.log(a);
// }

//5

// let a = rand(5, 10);

// for (let i = 0; i < a; i++) {
//     console.log(a);
// }

//6

// let a = rand(5, 10);

// for (let i = 0; i < a; i++) {
//     if (a > 7) {
//         console.log(a);
//     } else {
//         console.log("Mažiau už 7");
//     }
// }

//7

// let a;
// let suma = 0;
// let c;

// for (let i = 0; i < 5; i++) {
//     let b = rand(10, 20);
//     console.log(b);
//     a = b;
//     suma = suma + a;
//     c = "" + b + " " + b + "";
// }
// // console.log(a);
// console.log(suma);
// console.log(c);
// console.log(c + " " + suma);


// //8

// let a;
// let kiek = 0;
// let suma = 0;
// let kiek1 = 0;
// let kiek2 = 0;
// let kiek3 = 0;
// let kiek4 = 0;


// do {
//     a = rand(10, 25);
//     console.log(a);
//     kiek++;
//     if (a < 18) {
//         suma = suma + a;
//     }
//     if (a > 18) {
//         kiek1++
//     }
//     if (a % 2 === 0) {
//         kiek2++
//     } else {
//         kiek3++
//     }
//     if (kiek > 20) {
//         kiek4++
//     }
// }
// while (a > 12 && kiek < 20) {

// }
// console.log(kiek);
// // console.log(suma);
// // console.log("Suskaičiuota suma lygi " + suma + " atmestos " + kiek1 + " reikšmės");
// // console.log("Lyginių " + kiek2 + " nelyginių " + kiek3);
// console.log(kiek4);



// let b = 90;

// for (let i = 0; i < 11; i++) {
//     b = b + 10;
//     console.log(b);
// }

// // 2

// let kiek = 0;

// for (let i = 0; i < 10; i++) {
//     let a = rand(5, 15);
//     console.log(a);
//     if (a > 9) {
//         kiek++;
//     }
// }
// console.log(kiek);


// let kiek = 0;
// let suma = 0;
// let vid;

// for (let i = 0; i < 10; i++) {
//     let a = rand(5, 15);
//     console.log(a);
//     kiek++;
//     suma = suma + a;
// //     vid = suma / kiek;
// }

// console.log(vid);

// let kiek = 0;
// let a = rand(10, 50);
// do {
//     console.log(a);
//     kiek++;
// }
// while (a != 13 && a != 33 && a != 43);
// console.log(kiek);


// let kiek = 0;
// let a;

// do {
//     kiek++;
//     a = rand(10, 50);
//     console.log(a);
// }
// while (a != 13 && a != 33 && a != 43);
// console.log(kiek);

// let times = 0;
// let it = 0;
// while (times != 3) {
//     it++;
//     let random = rand(10, 20);
//     if (random === 17) {
//         console.log(random);
//         times++;
//     }
// }
// console.log(times, it);

// let times = 0;
// let it = 0;
// while (times != 3) {
//     it++;
//     let random = rand(10, 20);
//     console.log(random);
//     if (random === 17) {
//         console.log(random);
//         times++;
//     }
//     else {
//         times = 0;
//     }
// }
// console.log(times, it);



// let namas = [];
// let sk;

// for (let i = 0; i < 100; i++) {
//     let sk = rand(0, 100);
//     namas.push(sk);
// }
// for (let i = 0; i < 5; i++) {
//     let sk = rand(0, 100);
//     namas.push(sk);
// }
// for (let i = 0; i < 5; i++) {
//     let sk = -5;
//     namas.push(sk);
// }
// for (let i = 0; i < 5; i++) {
//     let sk = -10;
//     namas.unshift(sk);
// }
// for (let i = 0; i < 5; i++) {
//     namas.pop();
// }
// for (let i = 0; i < 5; i++) {
//     namas.shift();
// }
// let remove = namas.splice(9, 10);

// for (let i = 0; i < 100; i++) {
//     let sk = rand(0, 100);
//     namas.push(sk);
//     if (sk % 2 === 0) {
//         namas.splice(i, 1, 0);
//     }
// }
// console.table(namas);

//1

// function getMin(a, b, c) {
//     let min = Math.min(a, b, c);
//     return min;
// }

// console.log(getMin(5, 3, 9));

//2

// function getAv(a, b, c) {
//     let av = (a + b + c) / 3;
//     return av;
// }

// console.log(getAv(10, 3, 8));

//3

// function getSec(a) {
//     let sec = (a) * 60;
//     return sec;
// }

// console.log(getSec(10));

//4

// function getDigitsSum(sk) {
//     let paskSk;
//     let sum = 0;
//     while (sk > 0) {
//         paskSk = sk % 10;
//         sum = sum + paskSk;
//         sk = Math.floor(sk / 10);
//     }
//     return sum;
// }
// let sk = +prompt("Įveskite skaičių");
// console.log(getDigitsSum(sk));

//5
// let metai = +prompt("Įveskite metus");

// function kelMet(arr) {
//     let met = arr % 4 === 0;
//     return met;
// }
// console.log(kelMet(metai));


//6

// let a = 10;
// let b = 15;
// let c = 20;
// let plot;

// function trikPlot(a, b, c) {
//     let p = (a + b + c) / 2;
//     let plot = Math.sqrt((p * (p - a) * (p - b) * (p - c))).toFixed(2);
//     return plot;
// }
// console.log(trikPlot(plot));


//7-1

// let metai = [2020, 1968, 1789, 1654, 1323, 2019];

// function kelMet(metai) {
//     return (metai % 4 === 0) ? true : false;
// }
// for (let i = 0; i < metai.length; i++) {
//     console.log(kelMet(metai[i]));
// }


//7-2
// let a = prompt("Įrašykite");

// function giveMeSomething(a) {
//     return ("something " + a);
// }
// console.log(giveMeSomething(a));


//8


// let kiek2 = +prompt("Kiek pataikė dvitaškių?");
// let kiek3 = +prompt("Kiek pataikė tritaškių?");

// function count(kiek2, kiek3) {
//     return 2 * kiek2 + 3 * kiek3;
// }
// console.log(count(kiek2, kiek3));

//1

// let val = +prompt("Įveskite laiką");

// function pasisveikinimas(val) {
//     let atsakymas;
//     if (val <= 0 || val >= 24 || val !== "number") {
//         atsakymas = "Klaida";
//     } else if (val >= 6 && val <= 12) {
//         atsakymas = "Labas rytas";
//     } else if (val >= 13 && val <= 18) {
//         atsakymas = "Laba diena";
//     } else if (val >= 19 && val <= 22) {
//         atsakymas = "Labas vakaras";
//     } else if (val >= 23 && val < 24 || val > 0 && val <= 5) {
//         atsakymas = "Saldžių sapnų";
//     }
//     return atsakymas;
// }
// console.log(pasisveikinimas(val));


//9

// function isSeven(skaicius) {
//     return skaicius === 7;
// }

// console.log(isSeven(skaicius));

// //10

// function comp(pirmas, antras) {
//     return (pirmas.lenght === antras.lenght)
// }

// console.log(comp(pirmas, antras));

// //11

// // function isEmpty(string) {
// //     return string === "";
// // }
// // console.log(isEmpty(string));


// //1

// // function randomNumber() {
// //     return Math.random().toFixed(2);
// // }

// // let kiek = +prompt("Kiek atspausdinti?");
// // for (let i = 0; i < kiek; i++) {
// //     console.log(randomNumber());
// // }

// //2
// function randomNumber() {
//     return Math.random().toFixed(n);
// }

// let n = +prompt("Kokio skaičiaus apvalinti");
// let kiek = +prompt("Kiek atspausdinti?");
// for (let i = 0; i < kiek; i++) {
//     console.log(randomNumber());
// }

// //3

// function randomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// let kiek = +prompt("Kiek atspausdinti?");
// for (let i = 0; i < kiek; i++) {
//     console.log(randomNumber(1, 10));
// }

// //5

// function randomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min) % 2 === 0;
// }

// let kiek = +prompt("Kiek atspausdinti?");
// let min = +prompt("Min");
// let max = +prompt("Max");

// for (let i = 0; i < kiek; i++) {
//     console.log(randomNumber(min, max));
// }

//5

// function isEven(sk) {
//     return sk % 2 === 0;
// }

// let min = 30;
// let max = 40;
// let ats = "Gauta: ";

// for (let i = min; i < max; i++) {
//     if (isEven(i++)) {
//         ats += " " + i;
//     }
//     console.log("Ivesta: " + min, max);
//     console.log(ats);

