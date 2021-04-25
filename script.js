function toggleMenu() {
    let dropmenu = document.getElementsByClassName("dropmenu")[0]
    if (dropmenu.style.display == "block") {
        document.getElementsByClassName("dropmenu")[0].style.display = "none"
    }else{
        document.getElementsByClassName("dropmenu")[0].style.display = "block"
    }
}

function showByClass(eclass) {
    var elms = document.getElementsByClassName(eclass);
    var h = window.innerHeight;
    for (let i = 0; i < elms.length; i++) {
      if (
        elms[i].getBoundingClientRect().top < (3 * h) / 4
      ) {
        elms[i].style.opacity = "100%";
        elms[i].style.transform = "translate(0,0)";
      }
    }
    if (elms[0].getBoundingClientRect().top > (3 * h) / 4) {
      for (let i = 0; i < elms.length; i++) {
        elms[i].style.opacity = "0%";
        elms[i].style.transform = "translate(0,15%)";
      }
    }
  }

window.addEventListener("scroll", (event) => {
    showByClass('scroll')
    addAnim()
});

function addAnim() {
    var elms = document.getElementsByClassName('slide-hit-anim');
    var h = window.innerHeight;
    for (let i = 0; i < elms.length; i++) {
      if (
        elms[i].getBoundingClientRect().top < (3 * h) / 4
      ) {
        elms[i].style.animationName = 'slide-hit-anim'
        elms[i].style.transform = "translateX(0%)";
      }
      else{
        elms[i].style.transform = "translateX(300%)";
        elms[i].style.animationName = ''
      }
    }
}

showByClass('scroll')
addAnim()