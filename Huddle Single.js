$("a").on('click', function () {
    alert("This Is A Dead Link!");
})

$(".social img").on("click", function () {
    alert("Nothin Here!");
})

var loc = window.location.href + '';
if (loc.indexOf('http://') == 0) {
    window.location.href = loc.replace('http://', 'https://');
}