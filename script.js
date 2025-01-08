let result= document.getElementById("result");
let clear= document.getElementById("clear");
let back= document.getElementById("back");
let sqrt= document.getElementById("sqrt");
let boxes= document.querySelectorAll("#boxes");
let equal= document.querySelector("#equal");
let divide= document.querySelector("#divide");
let multiply= document.querySelector("#multiply");

clear.addEventListener("click", () => {
    result.innerText="";
})

back.addEventListener("click", ()=> {
    result.innerText = result.innerText.slice(0,-1);
})

sqrt.addEventListener("click", ()=>{
    result.innerText= Math.sqrt(eval(result.innerText));
})

boxes.forEach(box => {
    box.addEventListener("click", ()=>{
        result.innerText= result.innerText+box.innerText;
    })
});

equal.addEventListener("click", ()=>{
    result.innerText= eval(result.innerText);
})

divide.addEventListener("click", ()=>{
    result.innerText= result.innerText+"/";
})

multiply.addEventListener("click", ()=>{
    result.innerText= result.innerText+"*";
})