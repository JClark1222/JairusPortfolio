// This is the array that will hold the books
const bookLib = []

// Reset the form once submitted
reset = () => document.getElementById("myForm").reset();

// This function will push the user response into the array
function saveBook() {

    bookLib.push(document.getElementById("bookEntry").value)

    for (book of bookLib) {
        console.log(book)
        document.getElementById("bookList").innerHTML = bookLib.map(book => `<h3>${book}</h3>`).join('');
    }

    reset();
}