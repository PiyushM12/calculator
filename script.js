
 const one = document.getElementById('one')
 const two = document.getElementById('two')
 const three = document.getElementById('three')
 const four = document.getElementById('four')
 const five = document.getElementById('five')
 const six = document.getElementById('six')
 const seven = document.getElementById('seven')
 const nine = document.getElementById('nine')
 const eight = document.getElementById('eight')
 const zero = document.getElementById('zero')
 const plus = document.getElementById('plus')
 const minus = document.getElementById('minus')
 const multiply = document.getElementById('multiply')
 const divide = document.getElementById('divide')
 let  screen= document.getElementById('screen') 
 let expression = "";
 screen.value = expression;

one.addEventListener("click", ()=>{
    screen.value += "1";
  
})
two.addEventListener("click", ()=>{
    screen.value += "2";
})
three.addEventListener("click", ()=>{
    screen.value += "3";
})
four.addEventListener("click", ()=>{
    screen.value += "4";
})
 five.addEventListener("click", ()=>{
    screen.value += "5";
})
 six.addEventListener("click", ()=>{
    screen.value += "6";
})
 seven.addEventListener("click", ()=>{
    screen.value += '7';
})

 eight.addEventListener("click", ()=>{
    screen.value += "8";
})
nine.addEventListener("click", ()=>{
    screen.value += "9";
})
 zero.addEventListener("click", ()=>{
    screen.value += "0";
})
 plus.addEventListener("click", ()=>{  if(screen.value==""){
    alert("Cannot use operator without any initial expression")
 }else{
    screen.value += "+";}
})
 minus.addEventListener("click", ()=>{  if(screen.value==""){
    alert("cannot use operator without any initial expression")
 }else{
    screen.value += "-";}})
 multiply.addEventListener("click", ()=>
    {  if(screen.value==""){
        alert("cannot use operator without any initial expression")
     }else{
        screen.value += "*";}
})
 divide.addEventListener("click", ()=>{  if(screen.value==""){
    alert("cannot use operator without any initial expression")
 }else{
    screen.value += "/";}
})
const clear= document.getElementById('clear')
clear.addEventListener("click",()=>{
    screen.value = "";
})
const calc = document.getElementById("eval");
calc.addEventListener('click',()=>{
    let finalresult = eval(screen.value)
    screen.value = finalresult;
})
const decimal = document.getElementById('decimal')
decimal.addEventListener("click",()=>{
    screen.value+= ".";
})

 
 
 
 