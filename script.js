// This is just a sample script. Paste your real code (javascript or HTML) here.

var enlarged = false;

$('#zoomtryout').click(function () {
    $(this).stop(true, false).animate({
        width: enlarged ? 200 : 400,
        height: enlarged ? 200 : 400,
        left: 90,
        top: 90
    }, 200);

    enlarged = !enlarged;
});