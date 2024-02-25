var key = {
    'admin': ['nimda', 1],
    'john': ['7h4NK 9ou', 2],
    '': ['hell', 999]
}

const setIndex = 17;
var test = document.getElementById('holder');


var username = "none";
var password = "none";

function checkLogin() {
    console.log(sessionStorage.getItem("specialGift") + " is not equal to 1");
    if (parseFloat(sessionStorage.getItem("specialGift")) !== setIndex) {
        username = sessionStorage.getItem("specialUser");
        password = key[username][0];

        loggedIn();
    };
};

function checkUser() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    if (key[username] !== undefined) {
        if (key[username][0] == password) {
            alert("You're now logged in!");
            loggedIn();
        } else {
            alert("Wrong password.");
        }
    } else if (username !== "" && password !== "") {
        alert("Unknown user.")
    }
}

function loggedIn() {
    sessionStorage.setItem("specialGift", key[username][1]);
    sessionStorage.setItem("specialUser", username)
    var logDisplay = document.getElementById("log-in");

    document.getElementById("log-in").innerHTML = "";
    document.getElementById("log-in").textContent = "Welcome " + username + "!!";
    document.getElementById("log-in").style.right = "10px";

    document.getElementById('icon').textContent = "se deconnecter...";

    document.getElementById("icon").addEventListener("click", function () {
        sessionStorage.setItem("specialGift", setIndex);
        alert('Succesfully signed out!');
        console.log("special Gift reset: " + sessionStorage.getItem("specialGift"))
    });
}
