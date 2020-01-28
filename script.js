1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arr.reverse();
document.write(arr.join(" Облака "));
document.write("<hr>");
let a = prompt("Введіть індекс", "");
console.log(a);
arr.splice(a, 1);
document.write(arr);
document.write("<hr>");

//2
const styles = ["Джаз", "Блюз"];
document.write(styles);
document.write("<br>");
styles.push("Рок-н-ролл");
document.write(styles);
document.write("<br>");
styles.splice(Math.floor(styles.length/2), 1, "Классика");
document.write(styles);
document.write("<br>");
let newStyles = styles.splice(0, 1);
document.write(newStyles);
document.write("<br>");
styles.unshift("Рэп", "Регги");
document.write(styles);
document.write("<hr>");

// //3
let k;
const fantasticBreakfast = [];
function menu() {
    for (let b = 0; k !== ''; b++) {
        k = prompt("Що будите їсти насніданок?", "");
        fantasticBreakfast.push(k);
    }   
    document.write(fantasticBreakfast);
}
menu();

//4
let arrMenu = ["каша", "cуп", "пюре"];
function menu1() {
    for (let i = 0; i < arrMenu.length + 1; i++) {
        console.log(arrMenu[i]); 
        let newArrMenu = arrMenu.splice(0, 1);
    } 
    document.write(arrMenu);
}
menu1(arrMenu);