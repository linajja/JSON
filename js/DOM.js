// // let btn1 = document.getElementById("1");

// // btn1.addEventListener("click", function () {
// //     let img1 = document.querySelector("img");
// //     img1.style.width = "700px"
// // });

// // let btn2 = document.getElementById("2");

// // btn2.addEventListener("click", function () {
// //     let img2 = document.querySelector("img");
// //     img2.style.width = "300px";
// // });

// // let btn3 = document.getElementById("3");

// // btn3.addEventListener("click", function () {
// //     let img3 = document.querySelector("img");
// //     img3.style.filter = "none";
// // });

// // let btn4 = document.getElementById("4");

// // btn4.addEventListener("click", function () {
// //     let img4 = document.querySelector("img");
// //     img4.style.filter = "grayscale(100%)";
// // });

// // let newH = document.createEvent("h");
// // newH.textContent = "Pavadinimas";
// // let p = document.querySelector("p");
// // let parent = document.querySelector("div");
// // parent.insertBefore(newH, p);

// //1

// // let btn = document.getElementById("1");

// // btn.addEventListener("click", function () {
// //     let newH = document.createElement("h");
// //     newH.textContent = "Pavadinimas";
// //     let p = document.querySelector("p");
// //     let parent = document.querySelector("div");
// //     parent.insertBefore(newH, p);
// // });

// // let btn1 = document.getElementById("2");

// // btn1.addEventListener("click", function () {
// //     let pav = document.querySelector("h");
// //     pav.style.display = "none";
// // });

// // //2

// // let btn = document.getElementById("1");

// // btn.addEventListener("click", function () {
// //     let pav = document.querySelector("h");
// //     pav.style.display = "none";
// // });

// // let btn1 = document.getElementById("2");

// // btn1.addEventListener("click", function () {
// //     let pav = document.querySelector("h");
// //     pav.style.display = "block";
// // });

// //3

// // let btn = document.getElementById("1");

// // btn.addEventListener("click", function () {
// //     let pav = document.querySelector("h");
// //     pav.classList.toggle("pav");
// // });

// // swal("Here's the title!", "...and here's the text!");

// // let btn1 = document.getElementById("1");

// // btn1.addEventListener("click", function () {
// //     let all = document.querySelector("div1");
// //     all.style.display = "block";
// // });

// // let btn2 = document.getElementById("2");

// // btn2.addEventListener("click", function () {
// //     swal("Here's the title!", "...and here's the text!");
// //     let all = document.querySelector("div1");
// //     all.style.display = "none";
// // });

// // 2022.02.09

// // let btn1 = document.getElementById("1");

// // btn1.addEventListener("click", function () {
// //     let pav1 = document.querySelector("div1");
// //     pav1.style.justifyContent = "";
// // });

// // let btn2 = document.getElementById("2");

// // btn2.addEventListener("click", function () {
// //     let pav = document.querySelector("div1");
// //     pav.style.justifyContent = "end";
// // });

// // let btn3 = document.getElementById("3");

// // btn3.addEventListener("click", function () {
// //     let pav = document.querySelector("div1");
// //     pav.style.display = "none";
// // });

// // let btn5 = document.getElementById("5");

// // btn5.addEventListener("click", function () {
// //     let pav = document.querySelector("div1");
// //     let pav4 = document.querySelector("div2");
// //     pav.style.display = "";
// //     pav.style.justifyContent = "";
// //     pav4.style.display = "none";
// // });

// // let btn4 = document.getElementById("4");

// // btn4.addEventListener("click", function () {
// //     let pav4 = document.querySelector("div2");
// //     let pav41 = document.querySelector("div1");
// //     pav4.style.display = "flex";
// //     pav41.style.display = "none";

// // });

// //2022.02.10

// // let form = document.forms[0];

// // let pirmaForma = document.forms["pirma"];

// // pirmaForma.addEventListener("submit", function(e){
// //     e.preventDefault();
// //     let email = pirmaForma["email"].value;
// //     let email = pirmaForma["name"].value;
// //     let email = pirmaForma["pass"].value;
// //     console.log(email);
// //     console.log(name);
// // });


//1

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let result = document.createElement("p");
// let randNumber = rand(1, 5);
// let count = 0;
// console.log(randNumber);

// let forma = document.forms['pirma'];

// forma.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let skaicius = +forma["number"].value;
//     console.log(skaicius);
//     count++;
//     if (randNumber > skaicius) {
//         result.textContent = `Reikia didesnio skaiciaus nei ${skaicius}`;
//     } else if (randNumber < skaicius) {
//         result.textContent = `Reikai mazesnio skaiciaus nei ${skaicius}`;
//     }
//     else {
//         result.textContent = `Pataikei ${count} kartu`;
//     }
//     body.appendChild(result);
// });


//SUMA

let result1 = document.createElement("p");

let forma1 = document.forms["forma1"];

forma1.addEventListener('submit', function (e) {
    e.preventDefault();
    let skaicius1 = +forma1["number1"].value;
    let skaicius2 = +forma1["number2"].value;
    let suma = skaicius1 + skaicius2;
    result1.textContent = "Suma yra lygi: " + suma;
    h.appendChild(result1);
});


//KMI

let resultFinal = document.createElement("p");

let forma = document.forms["forma"];

function getKMI(num1, num2) {
    return (num2 / ((num1 * num1) / 10000));
}
function info(num) {
    if (num < 18) {
        return "Svoris nepakankamas";
    } else if (num >= 18, 5 && num < 25) {
        return "Svoris normalus";
    } else if (num >= 25 && num < 30) {
        return "Antsvoris";
    } else (num > 30)
    return "Nutukimas";
}


forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let ugis = +e.target.elements.ugis.value;
    let svoris = +e.target.elements.svoris.value;
    let result = getKMI(ugis, svoris).toFixed(2);
    resultFinal.textContent = "Jūsų KMI yra " + result + " . " + info(result);
    body.appendChild(resultFinal);
});
