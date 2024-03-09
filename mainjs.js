// function showMenu(){
//     let menu = document.getElementById("mIconFunc") 
//     let openIcon = document.getElementById("openIcon") 
//     let closeIc = document.getElementById("openIcon") 
//     menu.style.display = "flex"
//     closeIc.style.display = "block"
//     openIcon.style.display = "none"

// }
var actualWid = window.innerWidth; 

alert(actualWid)
$(function () {
    $("#openIcon").click(function () {
        // $("#mIconFunc").show();
        // $("#openIcon").hide();
        // $("#closeIcon").show();

        if ($(window).width() < 480) {
            $("#mIconFunc").show();
            $("#openIcon").hide();
            $("#closeIcon").show();
            alert('Less than 960');
         }
         else {
            alert('More than 960');
         }
    });


});