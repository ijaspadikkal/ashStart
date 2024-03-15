
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