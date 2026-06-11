checkGrade = () => {
console.log("You hit the function")

    let score = Number(document.getElementById("score").value);

   if(score >= 90) {
        document.getElementById("Grade").innerHTML = "A";
    } else if ( score >= 80 ) {
        document.getElementById("Grade").innerHTML = "B";
    } else if (score >= 70) {
        document.getElementById("Grade").innerHTML = "C";
    } else if (score >= 60) {
        document.getElementById("Grade").innerHTML = "D";
    }else {
        document.getElementById("Grade").innerHTML = "F";
    } 
}

const hello = () => "Hello World"
document.getElementById("sayHello").innerHTML = hello();

function greetGuest() {
    document.getElementById("sayHello").innerHTML= hello();
}