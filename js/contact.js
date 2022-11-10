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
