var header = document.getElementById('header');
var scrollBtn = document.getElementById('scroll-btn');


// When the user scrolls down 3000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
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