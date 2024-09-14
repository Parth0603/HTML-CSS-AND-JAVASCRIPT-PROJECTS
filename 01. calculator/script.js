let buttons = document.querySelectorAll(".btn")
let equal = document.querySelector(".equal");
let output = document.querySelector(".output");
let reset = document.querySelector(".reset")

let arr = [] // arr has all buttons in the array form 
buttons.forEach((e) => {
    arr.push(e)

})
let result;
let backOut = document.createElement("div");

function clear() {
    if (output.innerHTML == result) {
        output.innerHTML = ""
        backOut.innerHTML = ""
    }
}
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    // now element have all buttons individual
    element.addEventListener("click", () => {
        if(!result){
            output.innerHTML=""
        }
        
        output.innerHTML += element.innerHTML
        backOut.innerHTML += element.id
        try {
            result = eval(backOut.innerHTML)
        } catch (e) {}
    })
}
    console.log(result)

reset.addEventListener("click", () => {
    output.innerHTML = ""
    backOut.innerHTML = ""
})

equal.addEventListener("click", () => {
    output.innerHTML = result
    if (output.innerHTML == "undefined") {
        output.innerHTML = ""
    }
    backOut.innerHTML = ""
    result=""
})