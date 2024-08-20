const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");



myImage.onclick = () => {
    const myScr = myImage.getAttribute("Src");
    if (myScr === "images/firefox-icon.png") {
        myImage.setAttribute("Src", "images/sonic.png")
    }
    else {
        myImage.setAttribute("Src","images/firefox-icon.png")
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} is epic`;
}

function setUserName() {
    const myName = prompt("Please enter your name: ");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name",myName);
        myHeading.textContent = `${myName} is epic`;
    }
}
let myButton = document.querySelector("button");


myButton.onclick = () => {
    setUserName();
}


