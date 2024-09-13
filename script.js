var scrollBtn = document.getElementById('scrolltop-btn');


// When the user scrolls down 100px from the top of the document, show the color
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
