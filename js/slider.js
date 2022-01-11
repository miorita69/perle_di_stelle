/*
https://stackoverflow.com/questions/54085770/how-to-get-multiple-slider-on-one-page
*/

var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = [
    "slider__block1",
    "slider__block2",
    "slider__block3",
    "slider__block4",
    "slider__block5",
    "slider__block6",
    "slider__block7",
    "slider__block8",
    "slider__block9",
    "slider__block10",
    "slider__block11",
    "slider__block12"
];
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);
showDivs(1, 5);
showDivs(1, 6);
showDivs(1, 7);
showDivs(1, 8);
showDivs(1, 9);
showDivs(1, 10);
showDivs(1, 11);

function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}