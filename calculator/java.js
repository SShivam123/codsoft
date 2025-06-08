let display = document.querySelector("input")
let buttons = document.querySelectorAll(".btn")
let strings = ""
let arr = Array.from(buttons).forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "Ac"){
            strings = ""
            display.value=strings
        }else if(e.target.innerHTML=="="){
            strings=eval(strings)
            display.value=strings
        }else if(e.target.innerHTML == "DEL"){
            strings = strings.substring(0,strings.length-1)
             display.value=strings
        }
        else{
        strings+=e.target.innerHTML
        display.value=strings
        }
    })
})