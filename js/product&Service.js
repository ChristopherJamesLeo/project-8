console.log("hello world");
let design = document.getElementById("design");
let specialistRange = document.getElementById("specialistRange");
let range = document.getElementById("range");
let simulation = document.getElementById("simulation");
let modular = document.getElementById("modular");
let targerSystem = document.getElementById("targerSystem");
let modularMOUT = document.getElementById("modularMOUT");
let operation = document.getElementById("operation");
let training = document.getElementById("training");
let technology = document.getElementById("technology");

let closedesign = document.getElementById("close_model_btn");

let modelBoxOpen =(id)=>{
    let Modefcontainer = document.getElementById(id);
    Modefcontainer.classList.add("modelBoxOpen");
}
let modelBoxClose = (id)=>{
    let modelcontainerBox = document.getElementById(id);
    modelcontainerBox.classList.remove("modelBoxOpen");
}
let windowClose = (id)=>{
    let modelcontainerBox = document.getElementById(id);
    if (event.target == modelcontainerBox) {
        modelcontainerBox.classList.remove("modelBoxOpen");
    }
}
design.addEventListener("click" , e=()=>{
    modelBoxOpen("product_model_box_container");
})



closedesign.addEventListener("click" , e=()=>{
    modelBoxClose("product_model_box_container")

})

window.addEventListener("click", e=(event)=>{
    windowClose("product_model_box_container")
})