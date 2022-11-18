var header = document.getElementById("main_header");
var mainVisual = document.getElementById("main_visual");
window.onscroll = function () {
    if (mainVisual.offsetHeight <
        window.scrollY + header.offsetTop) {
        header.classList.add("is-scroll");
    }
    else {
        header.classList.remove("is-scroll");
    }
};