// function Odd(a) {
//     if (a % 2 != 0) {
//         return "toq son"
//     }
//     else if ( a % 2 == 0){return"juft son"}
// }
// console.log(Odd(10));
const piyodatezligi= 3.6
const velosipettezligi = 20.1
const moshinatezligi = 70
const samalyottezligi = 800

var input = document.getElementById("input")
var piyoda = document.getElementById("Piyoda")
var btn = document.getElementById("btn")
var velosipet = document.getElementById("velosipet")
var moshina = document.getElementById("moshina")
var samalyot = document.getElementById("samalyot")

btn.addEventListener("click", () => {
    piyoda.textContent = input.value / piyodatezligi
    velosipet.textContent = input.value / velosipettezligi
    moshina.textContent = input.value / moshinatezligi
    samalyot.textContent = input.value / samalyottezligi
})
