var header = document.getElementById('header');
var scrollBtn = document.getElementById('scroll-btn');


// When the user scrolls down 100px from the top of the document, show the color
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "#071903";
    } else {
        header.style.backgroundColor = "transparent";
    }

    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
