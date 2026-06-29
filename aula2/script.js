const box= document.querySelector(".box")
const btn= document.querySelector("#btn")
 
function handleChange(){
    box.classList.add("visivel")
}

function handleChangeHidden(){
    box.classList.remove("visivel")
}
 
 
btn.addEventListener("click",handleChange)
 
btn.addEventListener("dblclick",handleChangeHidden)