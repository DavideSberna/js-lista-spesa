const arrList = [
    "carne",
    "pesce",
    "frutta",
    "verdure",
    "dolci",
    "pistacchi",
    "cereali",
    "uova",
    
];
const list = document.querySelector("#list");
let input = document.querySelector("input");
let btn = document.querySelector("button");

let listItems;


function whileLoop(){
    let i = 0;
    while(i < arrList.length ){
        listItems = document.createElement("li");
        listItems.innerText = arrList[i];
        list.appendChild(listItems);
    
        i++;
    }
    
}
whileLoop();

btn.addEventListener("click", addListItems );

function addListItems(){
    if(input.value === ""){
        alert("Non puoi inserire un campo vuoto")
    } else {
        listItems.innerHTML += `<li>${input.value}</li>`; 
    }
    input.value = "";
}







