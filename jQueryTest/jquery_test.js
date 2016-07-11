/**
 * Created by Arthur on 2016-06-13.
 */

function toggleFadeParagraphs() {

    $("#p_1").fadeOut(1000);

    $(setTimeout(function () {
        $("#p_2").fadeOut(1000);
    }, 1000));
    $(setTimeout(function () {
        $("#p_3").fadeOut(1000);
    }, 2000));
    $(setTimeout(function () {
        $("#p_4").fadeOut(1000);
    }, 3000));
    $(setTimeout(function () {
        $("#p_1").fadeIn(1000);
        $("#p_2").fadeIn(1000);
        $("#p_3").fadeIn(1000);
        $("#p_4").fadeIn(1000);
    }, 4000));
}

function mouseOver() {
    console.log("Mouse over");
    var paraId = $(this).attr('id');
    $("#"+paraId).fadeOut(1000).fadeIn(1000);
}

function buttonClick() {
    console.log("Button click");
    var paraId = $(this).attr('data-p-id');
    $("#"+paraId).fadeToggle(1000);
}

function mouseOverAlt() {
    console.log("Mouse over");
    $(this).fadeOut(1000).fadeIn(1000);
}

function setListeners() {
    $('.buttonInPanel').on('click', buttonClick);
    $('.paraInPanel').on('mouseover', mouseOverAlt);
}

//--------------------------
// $(toggleFadeParagraphs());
$(setListeners());