// function getSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         return sum;
//     }
// }
// function getAvg(arr) {
//     return getSum(arr) / arr.length;
// }

// function getMaxNum(arr) {
//     let max = masyvas[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// function getMinNum(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// let masyvas = [2, 8, 9, 1];
// console.log(getSum(masyvas));
// console.log(getAvg(masyvas));
// console.log(getMaxNum(masyvas));
// console.log(getMinNum(masyvas));

//6-1

// function getSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// function getAvg(arr) {
//     return getSum(arr) / arr.length;
// }

// function getMaxNum(arr) {
//     return Math.max(...arr);
// }
// function getMinNum(arr) {
//     return Math.min(...arr);
// }
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(+prompt("Įveskite skaičių:"));
// }
// let opNum = + prompt();

// console.log("Įvesta: " + arr)
// switch (opNum) {
//     case 1:
//         console.log(getSum(masyvas));
//         break;
//     case 2:
//         console.log(getAvg(masyvas));
//         break;
//     case 3:
//         console.log(getMaxNum(masyvas));
//         break;
//     case 4:
//         console.log(getMinNum(masyvas));
//         break;
//     default:
//         console.log("Klaida");
// }


//1

// let intOrString = x => Number.isInteger(x) ? "int" : "str";
// let x = "a";
// console.log(intOrString(x));

//2

// let checkScope = i => i = "function scope" ? "Function scope i is" : "Block scope i is";

// //3

// let magic = date => new Date();

// //4
// let dogAge = +prompt("Įveskite šuns amžių");

// let humanAge = dogAge => ageInd * dogAge;
// let ageInd = 7;
// console.log("Your doggie is " + humanAge(dogAge) + " years old in dog years!");


//5

// let numArgs = (...args) => args.length;

// console.log(numArgs("too"));
// console.log(numArgs(1, 2));


//3
// function contains(arr, x) {
//     let ats = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             ats = true;
//             brake;
//         }
//     }
//     return ats;
// }

// let masyvas = [11, 22, 5, 9];

// console.log(contains(masyvas, 33));

//4

// function search(arr, x) {
//     let ats = false;
//     let index = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             ats = arr[i];
//             index.push(i)
//         }
//     }
//     return ats + " " + index;
// }

// let arr = ["Rima", "Zita", "Jonas", "Asta", "Tomas", "Jonas"];
// console.log(search(arr, "Jonas"));

//3-1


// function equals(arr1, arr2) {
//     let ats = false;
//     if (arr1.length === arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] === arr2[i])
//                 ats = true;
//         }
//     }
//     return ats;
// }

// let vardai1 = ["Rima", "Zita", "Jonas", 2, true, "Jonas"];
// let vardai2 = ["Rima", "Zita", "Jonas", 2, true, "Jonas"];
// let vardai3 = ["Rima", "Zita", "Zita", 2, true, "Jonas"];
// let vardai4 = ["Rima", "Jonas", 2, true, "Jonas"];
// console.log(equals(vardai1, vardai2));
// console.log(equals(vardai3, vardai4));


//6
// let arr1 = ["Rima", "Zita", "Jonas", 2, true, "Tomas"];

// function reverse(arr) {
//     let apv = [];
//     for (let i = arr.length - 1; i > -1; i--) {
//         apv.push(arr[i]);
//     }
//     return apv;
// }
// console.log(reverse(arr1));

//4
// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let sk = rand(11, 21);
//     arr.push(sk);
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function (item) {
//     console.log(item);
// });

//5


// let arr = [1, 2];
// arr[10] = true;

// for (let i = 0; i < arr.length; i++) {
// }
// console.log(arr.length);

// for (let i in arr) {
//     console.log(arr[i]);
// }


// for (let element of arr) {
//     console.log(element);
// }

// arr.forEach(function (item) {
//     console.log(item);
// });

//12


// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let arr = [];
// let kiek = 0;

// for (let i = 0; i < 12; i++) {
//     let sk = rand(-5, 5);
//     arr.push(sk);
//     console.log(arr[i]);
//     if (sk === 0) {
//         kiek++;
//     }
// }

// console.log(kiek);

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let arr = [];
// for (let i = 0; i < 12; i++) {
//     let sk = rand(-5, 5);
//     arr.push(sk);
//     console.log(arr[i]);
// }

// const ats = arr.filter(function (sk) {
//     return sk === 0;

// });
// console.log(ats.length);

//13

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let kiek = 0;
// let suma = 0;
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     let sk = rand(1, 30);
//     arr.push(sk);
//     console.log(arr[i]);
//     if (sk % 3 === 0) {
//         kiek++;
//         suma = suma + sk;
//     }
// }
// console.log("Masyve rasta: " + kiek + " trejetai/ - ų." + " Jų suma: " + suma)


// 13 - 1

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let arr = [];
// let suma = 0;
// for (let i = 0; i < 20; i++) {
//     let sk = rand(1, 30);
//     arr.push(sk);
//     console.log(arr[i]);
// }
// const ats = arr.filter(function (sk) {
//     suma += sk;
//     return sk % 3 === 0;
// });
// console.log(ats.length, suma);

// //1
// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let kiek = 0;
// let kiekPop = 0;
// let maxSkKiek;
// let maxSk;
// let arr = [];
// let masyvas = rand(10, 30);
// for (let i = 0; i < masyvas; i++) {
//     let sk = rand(0, 10);
//     arr.push(sk);
//     kiek += sk;
//     maxSk = Math.max(sk);
//     // if (sk > 2) {
//     //     kiekPop += sk;
//     // }
//     // if (arr[i] <= 2) {
//     //     arr[i] = 0;
//     // }
//     if (arr[i] = maxSk) {
//         maxSkKiek++;
//     }
// }
// console.log(arr);
// // console.log(kiek);
// // console.log(kiekPop);
// console.log(maxSk);
// console.log(maxSkKiek);

//27

// arr = [10, [], {}, "Text", true, [], 100];

// console.log(arr.find(elem => elem === true || elem === false));


// //28

// const darbuotojuSarasas = ["Petras", "Ona", "Rasa", "Mantas", "Gerda"];

// let darbuotojas = prompt("Įveskite darbuotojo vardą");
// console.log((darbuotojuSarasas.some(atejo => atejo === darbuotojas)) ? darbuotojas + " atėjo į darbą" : darbuotojas + " neatėjo į darbą");


// //29

// arr1 = [1, 10, 0, true, 12];

// console.log(arr1.every(sk => sk >= 0 && sk.isInteger));


// let as = {
//     vardas: "Lina",
//     amzius: 40,
//     gimtine: "Taurage",
//     tautybe: "lietuve",
//     kalbos: ["lietuviu", "rusu", "anglu"],
//     keliauninke: true,
//     vaikai: ["Skaiste", "Saule"],
//     darbas: "gamyba",
//     pomegiai: ["sachmatai", "knygos", "psichologija"],
//     megstuGaminti: false,
// };

// // console.log(as);

// //1



// function printInfo(obj) {
//     console.log(obj.vardas, obj.pavarde);
// }
// function getInfo(obj) {
//     return "Aš esu " + obj.vardas + " " + obj.pavarde;
// }
// let studentas1 = {
//     vardas: "Jonas",
//     pavarde: "Jonaits"
// };
// let studentas2 = {
//     vardas: "Petras",
//     pavarde: "Petraitis"
// };
// let studentas3 = {
//     vardas: "Ona",
//     pavarde: "Onaitė"
// };
// let sarasas = [];

// sarasas.push(studentas1, studentas2, studentas3, studentas2);
// console.log(sarasas);

// // // for (let student of sarasas) {
// // //     printInfo(student);
// // // }

// // sarasas.forEach(studentas => printInfo(studentas));

//2

// function printInfo(knyga) {
//     console.log(knyga.autorius, knyga.leidejas, knyga.metai, knyga.puslapiai, knyga.kalba, knyga.ivertinimas);
// }

// let knyga1 = {
//     autorius: "Abigal Dean",
//     leidejas: "Alma litera",
//     metai: 2020,
//     puslapiai: 500,
//     kalba: "Rusu",
//     ivertinimas: "3",
// }

// let knyga2 = {
//     autorius: "Petras Petraitis",
//     leidejas: "Obuolys",
//     metai: 2021,
//     puslapiai: 250,
//     kalba: "Lietuviu",
//     ivertinimas: "5",
// }

// let knyga3 = {
//     autorius: "Jonas Jonaitis",
//     leidejas: "Pegasas",
//     metai: 2021,
//     puslapiai: 384,
//     kalba: "Anglu",
//     ivertinimas: "4",
// }

// let knygos = [];
// knygos.push(knyga1, knyga2, knyga3);
// knygos.forEach(info => printInfo(info));

//3
// function sum(algos) {
//     let sum = 0;
//     for (let key in algos) {
//         sum = sum + algos[key];
//     }
//     return sum;
// }

// let algosMaxima = {
//     Jonas: 300,
//     Petras: 400,
//     Rasa: 500
// }

// let algosIki = {
//     Jonas: 300,
//     Petras: 400,
//     Rasa: 500,
//     Ona: 350,
//     Dina: 250
// }

// let masyvas = [];
// masyvas.push(algosMaxima, algosIki);
// let sumViso = 0;
// for (let algosViso of masyvas) {
//     sumViso = sumViso + sum(algosViso);
// }

// console.log("Visu alga: " + sum(algosMaxima));
// console.log("Visu alga: " + sum(algosIki));
// console.log("Bendrai visu alga: " + sumViso);

// console.log(algos.Jonas + algos.Petras + algos.Rasa);

// let sum = 0;
// for (let key in algos) {
//     sum = sum + algos[key];
// }
// console.log(sum);

//6

// let krepselis = [];

// let p1 = {
//     pavadinimas: "Pienas",
//     kaina: 1.0
// }
// let p2 = {
//     pavadinimas: "Kiausiniai",
//     kaina: 1.1
// }
// let p3 = {
//     pavadinimas: "Duona",
//     kaina: 1.2
// }

// krepselis.push(p1, p2, p3);
// // console.log(krepselis);

// function produktaiSpausd(produktai) {
//     console.log(produktai.pavadinimas + " : " + produktai.kaina);
// }
// function produktaiVisi(krepselis1) {
//     krepselis1.forEach(produktaiSpausd);
// }


// function visoPrekiu(krepselis) {
//     return krepselis.length;
// }

// function visoKaina(krepselis) {
//     let suma = 0;
//     for (let i = 0; i < krepselis.length; i++) {
//         suma += krepselis[i].kaina;
//     }
//     return suma;
// }

// function getMaxKaina(krepselis) {
//     let max = krepselis[0].kaina;
//     for (let i = 1; i < krepselis.length; i++) {
//         if (krepselis[i].kaina > max) {
//             max = krepselis[i].kaina;
//         }
//     }
//     return max;
// }

// function getMaxKainPreke(krepselis) {
//     let max = krepselis[0].kaina;
//     let index = 0;
//     for (let i = 1; i < krepselis.length; i++) {
//         if (krepselis[i].kaina > max) {
//             max = krepselis[i].kaina;
//             index = i;
//         }
//     }
//     return index;
// }
// let didVieta = getMaxKainPreke(krepselis);

// function getVidurkisKainu(krepselis) {
//     return visoKaina(krepselis) / krepselis.length;
// }

// produktaiVisi(krepselis);
// console.log("Viso prekiu: " + visoPrekiu(krepselis) + " vnt.");
// console.log("Viso kaina: " + visoKaina(krepselis).toFixed(2) + " EUR");
// console.log("Didziausia kaina: " + getMaxKaina(krepselis) + " EUR");
// produktaiSpausd(krepselis[didVieta]);
// console.log("Didziausia kaina: " + krepselis[didVieta].pavadinimas + " : " + krepselis[didVieta].kaina + " EUR");
// console.log("Krepselio kainu vidurkis: " + getVidurkisKainu(krepselis).toFixed(2) + " EUR");

//1

// let arr = [1, 2, 3];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

