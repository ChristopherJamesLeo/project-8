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

let aboutNitroDefence = document.getElementById("aboutUs_sec_2-li-1");
let companyEvolved = document.getElementById("aboutUs_sec_2-li-2");
let more = document.getElementById("aboutUs_sec_2-li-3");

aboutNitroDefence.addEventListener("click" , e=()=>{
    let container = document.getElementById("list_container");
    let sec_container = document.getElementById("list_sec_container");
    sec_container.style.top = "0px";
    let list_1 = document.getElementById("list_1");
    let list_1_height = list_1.getBoundingClientRect().height;
    console.log(list_1_height);
    container.style.height = list_1_height.toString()+"px";
    let line_1 = document.getElementsByClassName("aboutUs_sec_2-li_div-1")[0];
    line_1.style.width = "100%";
    let line_2 = document.getElementsByClassName("aboutUs_sec_2-li_div-2")[0];
    line_2.style.width ="0%";
    let line_3 = document.getElementsByClassName("aboutUs_sec_2-li_div-3")[0];
    line_3.style.width = "0%";
})
companyEvolved.addEventListener("click", e=()=>{
    let container = document.getElementById("list_container");
    let list_2 = document.getElementById("list_2");
    let list_2_height = list_2.getBoundingClientRect().height;
    list_2.style.zIndex = "1";
    container.style.height = list_2_height.toString()+"px";
    console.log(list_2_height);
    let sec_container = document.getElementById("list_sec_container");
    sec_container.style.top = `-${list_2_height.toString()}px`;9
    let line_1 = document.getElementsByClassName("aboutUs_sec_2-li_div-1")[0];
    line_1.style.width = "0%";
    let line_2 = document.getElementsByClassName("aboutUs_sec_2-li_div-2")[0];
    line_2.style.width ="100%";

})
more.addEventListener("click", e=()=>{
    let container = document.getElementById("list_container");
    let list_3 = document.getElementById("list_3");
    let list_2 = document.getElementById("list_2");
    list_2.style.zIndex = "0";
    let list_2_height = list_2.getBoundingClientRect().height;
    let list_3_height = list_3.getBoundingClientRect().height;
    let list_3_Scroll = list_2_height + list_3_height ;
    console.log(list_3_Scroll);
    container.style.height = list_3_height.toString()+"px";
    let sec_container = document.getElementById("list_sec_container");
    sec_container.style.top = `-${list_3_Scroll.toString()}px`;
    let line_1 = document.getElementsByClassName("aboutUs_sec_2-li_div-1")[0];
    line_1.style.width = "0%";
    let line_2 = document.getElementsByClassName("aboutUs_sec_2-li_div-2")[0];
    line_2.style.width ="0%";
    let line_3 = document.getElementsByClassName("aboutUs_sec_2-li_div-3")[0];
    line_3.style.width = "100%";
})
