document.getElementById("myButton").addEventListener("click", function () {
    document.getElementById("myParagraph").innerText = "Button clicked!";
});


document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill out all fields.");
    }
});