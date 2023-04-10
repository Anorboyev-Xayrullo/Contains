let list = document.querySelector(".list-group")
let btn = document.querySelector(".btn")
btn.onclick = () =>{
    if (list.classList.contains("active")){
        list.classList.remove("active")
        list.style.transition = "1s"
    }else {
        list.classList.add("active")
        list.style.transition = "1s"
    }
}