function toggleMenu() {
    let dropmenu = document.getElementsByClassName("dropmenu")[0]
    if (dropmenu.style.display == "block") {
        document.getElementsByClassName("dropmenu")[0].style.display = "none"
    }else{
        document.getElementsByClassName("dropmenu")[0].style.display = "block"
    }
}