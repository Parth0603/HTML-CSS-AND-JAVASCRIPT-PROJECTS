let exit = document.querySelector(".cross")
let video = document.querySelector(".video")
let play = document.querySelector(".play")
if (video.style.display === "none") {
    play.style.display = "none"
}

if (video.style.display === "block") {
    exit.style.display = "flex"

}
exit.addEventListener("click", () => {
    video.style.display = "none"
    exit.style.display = "none"
    play.style.display = "flex"
}
)
play.addEventListener("click", () => {
    exit.style.display = "flex"
    video.style.display = "block"
    if (video.style.display === "block") {
        play.style.display = "none"
    }
}
)
