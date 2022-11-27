const navItems = document.querySelectorAll("li")

navItems.forEach(item =>{
    item.addEventListener("click", () =>{
        removeActiveClass()
        item.classList.add("active")
    })
})

function removeActiveClass(){
    navItems.forEach(item =>{
        item.classList.remove("active")
    })
}