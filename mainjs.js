var actualWid = window.innerWidth;
function showMenu() {
    let menu = document.getElementById("mIconFunc")
    let openIcon = document.getElementById("openIcon")
    let closeIc = document.getElementById("closeIcon")
    menu.style.display = "flex"
    closeIc.style.display = "block"
    openIcon.style.display = "none"
}
function hideMenu() {
    let menu = document.getElementById("mIconFunc")
    let openIcon = document.getElementById("openIcon")
    let closeIc = document.getElementById("closeIcon")
    menu.style.display = "none"
    closeIc.style.display = "none"
    openIcon.style.display = "block"
}


function redirectToWhatsApp() { 
    var phoneNumber = "919745553598"; 
    var message = "Hello, I am interested to purchase products"; 
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message); 
    window.location.href = whatsappURL;
}