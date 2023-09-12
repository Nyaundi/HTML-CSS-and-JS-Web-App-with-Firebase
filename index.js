import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://freecodecamp-firebase-app-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInBD = ref(database, "shoppingList")

const addButtonEl = document.getElementById("input-field");
const addinput = document.getElementById("add-button");

addButtonEl.addEventListener("click", function(){
    let cleanCode = addButtonEl.value

    push(shoppingListInBD, cleanCode)

    console.log(`${cleanCode} is added`);
})

