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

let i = 0;
while(i < arrList.length ){
    const listItems = document.createElement("li")
    listItems.innerText = arrList[i]
    list.appendChild(listItems)
    
    i++
}

