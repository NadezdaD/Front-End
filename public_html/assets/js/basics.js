//Primer za alert
//alert("Hello");

// Dohvatanje elementa preko Id-a
//console.log(document.getElementById("user"));

var userElement = document.getElementById("user");
//console.log(userElement);
console.log("korisnik (id=user) je: " + userElement.innerHTML);

//Dohvatanje elementa pomoću klase

console.log("Element sa klasom desc:");
var descElements = document.getElementsByClassName("desc");
console.log("student1:");
console.log(descElements[0].innerHTML);
console.log("student2:");
console.log(descElements[1].innerHTML);
console.log("student3:");
console.log(descElements[2].innerHTML);

console.log("studenti su:" + " "
        + descElements[0].innerHTML + ","
        + descElements[1].innerHTML + ","
        + descElements[2].innerHTML + "."
        );

//Izmena vrednosti elementa

userElement.innerHTML = "Nadežda";
console.log("korisnik (id=user) je: " + userElement.innerHTML);

descElements[0].innerHTML = "Marija";
descElements[1].innerHTML = "Maja";
descElements[2].innerHTML = "Mara";

console.log("studenti su:" + " "
        + descElements[0].innerHTML + ","
        + descElements[1].innerHTML + ","
        + descElements[2].innerHTML + "."
        );

//Provera da li je korisnig punoletan



function ageVerification() {
//    alert (ageInput);
    var ageInput = document.getElementById("age").value;
    console.log(ageInput);
    var messageBoxElement = document.getElementById("message-box");

    if (ageInput >= 18) {
        messageBoxElement.innerHTML = "Korisnik je punoletan";
    } else {
        messageBoxElement.innerHTML = "Korisnik nije punoletan";
    }
}









