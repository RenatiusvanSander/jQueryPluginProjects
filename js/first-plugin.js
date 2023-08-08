var script = document.createElement('script');
script.src = 'jquery-3.7.0.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function() {
    $("#testParagraph").click(function() {
        alert(clicked);
    });
});


