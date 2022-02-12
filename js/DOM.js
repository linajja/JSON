
// let forma2 = document.querySelector("form");
// let visasSarasas = document.querySelector("ul");
// let input = document.querySelector("input")

// forma2.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let info = e.target.elements.info.value;
//     let sarasas = document.createElement("li")
//     sarasas.textContent = info;
//     visasSarasas.appendChild(sarasas);
// });

// input.addEventListener("focus", function (e) {
//     e.target.style.background = "blue";
// });

// visasSarasas.addEventListener("blur", function (e) {
//     e.target.style.background = "";
// });


// let laikai = document.getElementById("metuLaikai");
// let body = document.querySelector("body");

// // laikai.addEventListener("change", function (e) {
// //     let value = laikai.value;
// //     if (value === "ruduo") {
// //         body.style.backgroundImage = 'url("./img/ruduo.jpg")';
// //     } else if (value === "vasara") {
// //         body.style.backgroundImage = 'url("./img/vasara.jpg")';
// //     } else if (value === "ziema") {
// //         body.style.backgroundImage = 'url("./img/ziema.jpg")';
// //     } else {
// //         body.style.backgroundImage = 'url("./img/pavasaris.jpg")';
// //     }
// // });

// laikai.addEventListener("change", function (e) {
//     let value = laikai.value;
//     body.style.backgroundImage = 'url("./img/' + value + '.jpg")';
// });

let fotoGal = document.getElementsByClassName("all")[0];
let bigImg = document.getElementById("one");
let p = document.querySelector("p");

fotoGal.addEventListener("click", function (e) {
    console.log(e.target.currentSrc);
    let src = e.target.currentSrc;
    console.log(e.target.alt);
    let alt = e.target.alt;
    bigImg.setAttribute("src", src);
    p.textContent = alt;
});



