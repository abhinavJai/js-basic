var newItemCounter = 1;
var ourbutton= document.getElementById("our-button");
var headline = document.getElementById("heading");
var listItems = document.getElementById("ourList").getElementsByTagName("li");
var ourList = document.getElementById("ourList");

for (i = 0; i < listItems.length; i++) {
listItems[i].addEventListener("Click",activateItem);
}

function activateItem(){
    headline.innerHTML = this.innerHTML; 
}

ourbutton.addEventListener("click", createNewItem);

function createNewItem(){
    ourList.innerHTML += "<li> Something new " + newItemCounter +" </li>";
    newItemCounter ++;
}