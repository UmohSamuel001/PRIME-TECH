var header = document.getElementById('header');

// When the user scrolls down 3000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
header.style.backgroundColor = "#071903";
} else {
header.style.backgroundColor = "transparent";
}
}