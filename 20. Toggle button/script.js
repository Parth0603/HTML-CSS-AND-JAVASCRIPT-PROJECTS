let circle = document.querySelector(".circle")
let main = document.querySelector(".main")
let box = document.querySelector(".box")
let message=document.querySelector(".message")

main.addEventListener("click", () => {
    document.body.style.backgroundColor = "white"
    if (circle.classList[1] == "dark") {
        circle.classList.add("light")
        circle.classList.remove("dark")
        box.style.backgroundColor = "black"
        document.body.style.backgroundColor="rgb(143, 126, 126)"
        message.style.color="black"
        setTimeout(() => {
            message.textContent="Light mode"
        }, 900);
        setTimeout(() => {
            message.innerHTML=""
        }, 3000);

    }
    else if (circle.classList[1] == "light") {
        circle.classList.add("dark")
        circle.classList.remove("light")
        box.style.backgroundColor = "white"
        document.body.style.backgroundColor="black"
        message.style.color="white"
        setTimeout(() => {
            message.textContent="Dark mode"
        }, 900);
        setTimeout(() => {
            message.innerHTML=""
        }, 3000);
    }
}
)


