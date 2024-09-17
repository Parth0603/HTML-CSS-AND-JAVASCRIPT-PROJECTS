let indicator=document.querySelector(".scroll-indicator .progress")
let scroll_height=document.documentElement.scrollHeight - document.documentElement.clientHeight
console.log(scroll_height);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);


window.addEventListener("scroll",scroll)
function scroll(){
    let scrollTop=document.documentElement.scrollTop
    let scrolled=(scrollTop / scroll_height) *100
    indicator.style.width=`${scrolled}%`
}


