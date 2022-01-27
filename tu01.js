function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1

let b = 90;

for (let i = 0; i < 11; i++) {
    b = b + 10;
    console.log(b);
}

//2

let kiek = 0;

for (let i = 0; i < 10; i++) {
    let a = rand(5, 15);
    console.log(a);
    if (a > 9) {
        kiek++;
    }
}
console.log(kiek);

//3
let kiek = 0;
let suma = 0;
let vid;

for (let i = 0; i < 10; i++) {
    let a = rand(5, 15);
    console.log(a);
    kiek++;
    suma = suma + a;
    vid = suma / kiek;
}

console.log(vid);

//4
let kiek = 0;
let a;

do {
    kiek++;
    a = rand(10, 50);
    console.log(a);
}
while (a != 13 && a != 33 && a != 43);
console.log(kiek);

//5

let times = 0;
let it = 0;
while (times != 3) {
    it++;
    let random = rand(10, 20);
    if (random === 17) {
        console.log(random);
        times++;
    }
}
console.log(times, it);

//6

let times = 0;
let it = 0;
while (times != 3) {
    it++;
    let random = rand(10, 20);
    console.log(random);
    if (random === 17) {
        console.log(random);
        times++;
    }
    else {
        times = 0;
    }
}
console.log(times, it);

