
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
// // });

// let fotoGal = document.getElementsByClassName("all")[0];
// let bigImg = document.getElementById("one");
// let p = document.querySelector("p");

// fotoGal.addEventListener("click", function (e) {
//     console.log(e.target.currentSrc);
//     let src = e.target.currentSrc;
//     console.log(e.target.alt);
//     let alt = e.target.alt;
//     bigImg.setAttribute("src", src);
//     p.textContent = alt;
// });

let dataArray = [
    {
        imgSrc: "https://images.unsplash.com/photo-1552901464-1449e53709c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
        text: "Kada ta žiema?"

    },
    {
        imgSrc: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/7a0b8947-d971-444f-9287-e11fd0d2c421/autumn-poems-header-min.jpg",
        text: "Jau ruduo?"
    },
    {
        imgSrc: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210316134609-01-wisdom-project-spring.jpg",
        text: "Ech, tas pavasaris!"
    }
];
function changeHtml(data) {
    let text = document.getElementById("text");
    let img = document.getElementById("img");
    img.setAttribute("src", data.imgSrc);
    text.innerHTML = data.text;
}

function randomIndex(size) {
    let randInd = Math.floor(Math.random() * size);
    return randInd;
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
    let randInd = randomIndex(dataArray.length);
    changeHtml(dataArray[randInd]);
});
