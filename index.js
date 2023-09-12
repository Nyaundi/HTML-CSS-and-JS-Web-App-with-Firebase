import { add } from "../functions.js"

const appSettig = {
    databaseURL: "https://freecodecamp-firebase-app-default-rtdb.firebaseio.com/"
}


const addButtonEl = document.getElementById("input-field");
const addinput = document.getElementById("add-button");

addButtonEl.addEventListener("click", function(){
    let cleanCode = addButtonEl.value
    console.log(cleanCode);
})

console.log(add(2, 3));