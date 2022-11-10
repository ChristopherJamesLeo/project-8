
// Nav Bar 

window.addEventListener("scroll" , e= ()=>{
    let menu_bar = document.getElementById ("menu");
    let nav_bar = document.getElementById ("nav_ul");
    let nav_bar_array = Array.from(nav_bar.children);
    menu_bar.classList.toggle ("menu_transprant" , window.scrollY > 50);
    // for nav_bar_list Change 
    for (let i = 0; i < nav_bar_array.length; i++) {
        let nav_list = nav_bar_array[i];
        // console.log (nav_list);
        nav_list.classList.toggle ("nar_ul_li_transpe" , window.scrollY > 50)
    }
})
$(document).ready(
    $(".menu_li_show_btn_div").click(e=()=>{
        $(".nav_slide").slideToggle("slow");
    })
)

// slideBar

let leftBtn = document.getElementById("sec_1_slide_btn-1");
let rightBtn = document.getElementById("sec_1_slide_btn-2");

let redLine = ()=>{
    let pTag = document.getElementById('sec_btn_p');
    pTag.textContent = "02/02"
    let whiteLine = document.getElementsByClassName("btn_line_1")[0];
    whiteLine.style.width = "200px";
    let redLine = document.getElementsByClassName("btn_line_2")[0];
    redLine.style.width = "0px";
}
let whiteLine = ()=>{
    let pTag = document.getElementById('sec_btn_p');
    pTag.textContent = "01/02"
    let whiteLine = document.getElementsByClassName("btn_line_1")[0];
    whiteLine.style.width = "0px";
    let redLine = document.getElementsByClassName("btn_line_2")[0];
    redLine.style.width = "200px";
}
rightBtn.addEventListener("click", e=()=>{
    let slideLeft = document.getElementById("sec_1_slide");
    slideLeft.style.transform = "translateX(-100%)";
    redLine();
})
leftBtn.addEventListener("click", e=()=>{
    let slideLeft = document.getElementById("sec_1_slide");
    slideLeft.style.transform = "translateX(0)";
    whiteLine();
})

let secLeftBtn = document.getElementById("sec-5-btn-left");
let secRightBtn = document.getElementById("sec-5-btn-right");

secRightBtn .addEventListener ("click" , e = ()=>{
    let slideLeft = document.getElementById("sec-5-ul");
    slideLeft.style.transform = "translateX(-100%)";
    document.getElementById("sec-5-btn-container-p").textContent = "02/02"
})

secLeftBtn.addEventListener("click", e = () =>{
    let slideLeft = document.getElementById("sec-5-ul");
    slideLeft.style.transform = "translateX(0%)";
    document.getElementById("sec-5-btn-container-p").textContent = "01/02"
})

let btnArray = [
    document.getElementById("actionTarget"),
    document.getElementById("beaverfit"),
    document.getElementById("coverSixShelter"),
    document.getElementById("dannDevelope"),
    document.getElementById("militec"),
    document.getElementById("pingEngineer"),
]

let slider = (transformY)=>{
    let slideUl = document.getElementById("sec_4_right_list");
    slideUl.style.transform = transformY;
    console.log("function running")
}
document.getElementById("actionTarget").addEventListener("click" , e = (event) =>{
    document.getElementById("actionTarget").style.color = "#D0605B";
    document.getElementById("beaverfit").style.color = "gray";
    document.getElementById("coverSixShelter").style.color = "gray";
    document.getElementById("dannDevelope").style.color = "gray";
    document.getElementById("militec").style.color = "gray";
    document.getElementById("pingEngineer").style.color = "gray";
    slider("translateY(0px)");

})
document.getElementById("beaverfit").addEventListener("click" , e = (event) =>{
    document.getElementById("actionTarget").style.color = "gray";
    document.getElementById("beaverfit").style.color = "#D0605B";
    document.getElementById("coverSixShelter").style.color = "gray";
    document.getElementById("dannDevelope").style.color = "gray";
    document.getElementById("militec").style.color = "gray";
    document.getElementById("pingEngineer").style.color = "gray";
    slider("translateY(-200px)");
})
document.getElementById("coverSixShelter").addEventListener("click" , e = (event) =>{
    document.getElementById("actionTarget").style.color = "gray";
    document.getElementById("beaverfit").style.color = "gray";
    document.getElementById("coverSixShelter").style.color = "#D0605B";
    document.getElementById("dannDevelope").style.color = "gray";
    document.getElementById("militec").style.color = "gray";
    document.getElementById("pingEngineer").style.color = "gray";
    slider("translateY(-400px)");
})
document.getElementById("dannDevelope").addEventListener("click" , e = (event) =>{
    document.getElementById("actionTarget").style.color = "gray";
    document.getElementById("beaverfit").style.color = "gray";
    document.getElementById("coverSixShelter").style.color = "gray";
    document.getElementById("dannDevelope").style.color = "#D0605B";
    document.getElementById("militec").style.color = "gray";
    document.getElementById("pingEngineer").style.color = "gray";
    slider("translateY(-600px)");
})
document.getElementById("militec").addEventListener("click" , e = (event) =>{
    document.getElementById("actionTarget").style.color = "gray";
    document.getElementById("beaverfit").style.color = "gray";
    document.getElementById("coverSixShelter").style.color = "gray";
    document.getElementById("dannDevelope").style.color = "gray";
    document.getElementById("militec").style.color = "#D0605B";
    document.getElementById("pingEngineer").style.color = "gray";
    slider("translateY(-800px)");
})
document.getElementById("pingEngineer").addEventListener("click" , e = (event) =>{
    document.getElementById("actionTarget").style.color = "gray";
    document.getElementById("beaverfit").style.color = "gray";
    document.getElementById("coverSixShelter").style.color = "gray";
    document.getElementById("dannDevelope").style.color = "gray";
    document.getElementById("militec").style.color = "gray";
    document.getElementById("pingEngineer").style.color = "#D0605B";
    slider("translateY(-1000px)");
})


window.addEventListener("scroll" , e = ()=>{
    let backMenu = document.getElementById("backMenu");
    backMenu.classList.toggle("visibleMenu" , window.scrollY > 1500);
})

let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click" , e =()=>{
    console.log("btn working")
    window.scrollTo({
        top: 0,
        behavior : "smooth",
    })
})

