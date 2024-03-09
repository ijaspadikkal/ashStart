
var actualWid = window.innerWidth; 
function showMenu(){
    let menu = document.getElementById("mIconFunc") 
    let openIcon = document.getElementById("openIcon") 
    let closeIc = document.getElementById("closeIcon") 

    menu.style.display = "flex"
    closeIc.style.display = "block"
    openIcon.style.display = "none"
    

} 
function hideMenu(){
    let menu = document.getElementById("mIconFunc") 
    let openIcon = document.getElementById("openIcon") 
    let closeIc = document.getElementById("closeIcon") 

    menu.style.display = "none"
    closeIc.style.display = "none"
    openIcon.style.display = "block"
    

} 

// alert(actualWid)
// $(function () {
//     $("#openIcon").click(function () {
        

//         if ($(window).width() < 480) {
//             $("#mIconFunc").show();
//             $("#openIcon").hide();
//             $("#closeIcon").show();
//             alert('Less than 960');
//          }
//          else {
//             alert('More than 960');
//          }
//     });
//     $("#closeIcon").click(function () {
     
         
//             $("#mIconFunc").hide();
//             $("#openIcon").show();
//             $("#closeIcon").hide();
           
         
//     });

// });