let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".expirment");
 
if(window.localStorage.getItem("color")){
    exp.style.background=window.localStorage.getItem("color");
    
    lis.forEach((li)=>{
        li.classList.remove("active");
    });

    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}


lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        exp.style.background =  e.currentTarget.dataset.color;
    });
})