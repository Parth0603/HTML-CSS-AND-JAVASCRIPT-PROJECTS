const red_heart = document.querySelector(".red-heart")
const gray_heart = document.querySelector(".gray-heart")

console.log(gray_heart);
console.log(red_heart);

gray_heart.addEventListener("click",() => {
    red_heart.classList.add("animation")
    gray_heart.classList.add("fill-color")
    console.log(gray_heart);
    console.log(red_heart);
}
)
red_heart.addEventListener("click",() => {
    red_heart.classList.remove("animation")
    gray_heart.classList.remove("fill-color")
    console.log(gray_heart);
    console.log(red_heart);
}
)


