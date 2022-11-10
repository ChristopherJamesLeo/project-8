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
    backMenu.classList.toggle("visibleMenu" , window.scrollY > 500);
})

let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click" , e =()=>{
    console.log("btn working")
    window.scrollTo({
        top: 0,
        behavior : "smooth",
    })
})