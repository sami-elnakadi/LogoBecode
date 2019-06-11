//Tipping lettre

let part1 = document.getElementsByClassName("becode1")


let time = 100;


for (i = 0; i<part1.length ; i++) {

let x = part1[i];


setTimeout(() => {
  
x.classList.add("becode1appear");
console.log(x);

}, time)

time += 100


}

   

let part2 = document.getElementsByClassName("becode2")


let time2 = 700;


for (i = 0; i<part1.length ; i++) {

let x = part2[i];


setTimeout(() => {
  
x.classList.add("becode1appear");
console.log(x);

}, time2)

time2 += 100

}

   
let numberArray = document.getElementsByClassName("numberswitch")

let timeNumber= 25;
for ( i = 0; i<numberArray.length; i++) {

let x = numberArray[i] 

setTimeout(()=> {
    x.classList.add("numberswitch2")
}, timeNumber)

timeNumber += 25;

}

//Chiffres

let starArray = document.getElementsByClassName("star")


let timeStar = 3425;

for ( i = 0; i<starArray.length; i++) {

    let x = starArray[i] 
    
    setTimeout(()=> {
        x.classList.add("star2")
    }, timeStar)
    
    timeStar += 50;
    
    }