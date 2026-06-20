// This is the array that will hold the books
const favoriteReads = []
const currentRead = []

// Reset the form once submitted
reset = () => document.getElementById("myForm").reset();

// This function will push the user response into the array
function saveBook() {

    favoriteReads.push(document.getElementById("bookEntry").value)

    for (book of favoriteReads) {
        document.getElementById("bookItem").innerHTML = favoriteReads.map((book, i) => `<button onclick="removeFav(${i})">X</button><h3>${book}</h3>`).join('');
    }
    reset();
}

function saveCurrentBook() {

    currentRead.push(document.getElementById("currentEntry").value)

    for (book of currentRead) {
        document.getElementById("currentRead").innerHTML = currentRead.map((book, i) => `<button onclick="removeCurrent(${i})">X</button><h3>${book}</h3>`).join('');
    }
    reset();
}

//Remove an item from the Favoraite Books list
function removeFav(i) {
    favoriteReads.splice(i,1)
    
        if (favoriteReads.length === 0 ) {
            document.getElementById("bookItem").innerHTML = ""
        } else {
            document.getElementById("bookItem").innerHTML = favoriteReads.map(book => `<button onclick="removeFav()">X</button><h3>${book}</h3>`).join('');
        }
}

// Removes an item from the Currently Reading list
function removeCurrent(i) {
    currentRead.splice(i,1)
    
        if (currentRead.length === 0 ) {
            document.getElementById("currentRead").innerHTML = ""
        } else {
            document.getElementById("currentRead").innerHTML = currentRead.map(book => `<button onclick="removeCurrent()">X</button><h3>${book}</h3>`).join('');
        }
}