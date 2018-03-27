/* 
1. Sa se implementeze o functie care primeste un array de obiecte si o nume de cheie si returneaza un array cu toate valorile corespunzatoare cheii din obiectele din array.
*/

const demoArr = [
    { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
    { id: 2, color: 'green', height: 5, width: 30, distance: 5 },
    { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
    { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
    { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
    { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
];

console.log("Probl.1");
function pluck(arr, key) {
    return arr.map(el => el[key])
}

console.log(pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];
console.log("----------------------------------------------------------");

/*
2. Sa se implementeze o functie care returneaza ariile tuturor elementelor din array-ul de mai sus, aria e inaltime * latime.
*/
console.log("Probl.2");

function calculateArea(arr) {
    return arr.map(el => el.height * el.width);
}

console.log(calculateArea(demoArr));
console.log("----------------------------------------------------------");
/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus unde elementele au aria mai mica sau egala cu 100
*/
console.log("Probl.3");
function filterArr(arr) {
    return arr.filter(el => el.height * el.width <= 100)
}

console.log(filterArr(demoArr));
console.log("----------------------------------------------------------");
/*
4. Sa se implementeze o functie numita reject, care primeste un array si o functie iterator.
 Functia iterator primeste cate un element din array ca si parametru si trebuie sa returneze true sau false.
 Daca returneaza true, elementul in cauza nu va fi inclus de functia parinte in array-ul rezultat. 
 Daca returneaza false va fi inclus.
*/

// NU AM INTELES EXACT CERINTA
function iterator(obj, key) {
    return obj.hasOwnProperty(key) ? delete obj[key] : false;
}
function reject(arr, key) {
    return arr.filter(el => {
        return el[key] < 10 ? iterator(el, key) : el;
    })
}
//console.log(reject(demoArr, iterator)); // sa returneze un array de obiecte cu height < 10
console.log(reject(demoArr, 'height')); // sa returneze un array de obiecte cu height < 10

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/
console.log("Probl.5");
function findColor(arr, color) {
    return arr.filter(el => el.color === color);
}
console.log(findColor(demoArr, 'blue'));
console.log(findColor(demoArr, 'crimson'));
console.log("----------------------------------------------------------");
/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= 10, false altfel.
*/
console.log("Probl.6");
function areasAreBigger(arr, areaMinValue) {
    const arrArea = calculateArea(arr);
    const arrAreaBoolean = arrArea.map(el => el >= areaMinValue);
    return arrAreaBoolean.includes(false) ? false : true;
}
console.log(areasAreBigger(demoArr, 6));
console.log(areasAreBigger(demoArr, 10));
console.log("----------------------------------------------------------");

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele array-ului are culoarea 'green';
*/
console.log("Probl.7");
function atLeastOneIsOfColor(arr, color) {
    return arr.some(el => el.color === color ? true : false)
}
console.log(atLeastOneIsOfColor(demoArr, 'green'));
console.log(atLeastOneIsOfColor(demoArr, 'crimson'));
console.log(atLeastOneIsOfColor(demoArr, 'yellow'));
console.log("----------------------------------------------------------");

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/
console.log("Probl.8");
function sumOfDistances(arr) {
    return arr.map(el => el.distance)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
}
console.log(sumOfDistances(demoArr));
console.log("----------------------------------------------------------");

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate ori apare fiecare culoare in parte in array-ul de obiecte. {red: 2, blue: 1, etc...}
*/
console.log("Probl.9");
function noColors(arr) {
    const obj = new Object();
    arr.filter((el, index, a) => {
        const color = a[index].color;
        !obj.hasOwnProperty(color) ? obj[color] = 1 : obj[color]++;
        // OR
        // !(color in obj) ? obj[color] = 1 : obj[color]++;        
    });
    return obj
}

console.log(noColors(demoArr));
console.log("----------------------------------------------------------");


/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/
function uniqueColors(arr) {
    const arrColors = new Array();
    return arr.filter((el) => {
        const color = el.color;
        if (!arrColors.includes(color)) {
            arrColors.push(color);
            return el;
        }
    });
}

console.log(uniqueColors(demoArr));

/*
11. Sa se scrie o functie care inverseaza doua numere.
*/
console.log("Probl.11");

function inversNumber(a, b) {
    return [a, b] = [b, a];
    // OR
    // return {a, b} = {b, a};
}
console.log(inversNumber(7, 2));
console.log("----------------------------------------------------------");

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];
function createObj(arr) {
    const obj = new Object();
    arr.forEach((e) => {
        obj.subject = arr[0];
        obj.time    = arr[1];
        obj.teacher = arr[2];
    })
    return obj;
}

function convert(arr) {
    const arrObj = new Array();
    arr.forEach((e) => {
        return arrObj.push(createObj(e));
    })
    return arrObj;
}

console.log(convert(classes));