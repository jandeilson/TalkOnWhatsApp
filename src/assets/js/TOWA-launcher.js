let launcher_btn = document.getElementById("launcher"),
    icon_btn = document.getElementById("icon-btn");

icon_btn.style.backgroundImage = "url(../../assets/images/whatsapp.svg)";
icon_btn.style.backgroundSize= "28px";
icon_btn.classList.add("closed");

launcher_btn.addEventListener("click", () => {
    if (icon_btn.classList.contains("opened")) {
        icon_btn.classList.add("closed");
        icon_btn.classList.remove("opened");
        icon_btn.style.backgroundImage = "url(../../assets/images/whatsapp.svg)";
        icon_btn.style.backgroundSize= "28px";
    } else {
        icon_btn.classList.add("opened");
        icon_btn.classList.remove("closed");
        icon_btn.style.backgroundImage = "url(../../assets/images/close.svg)";
        icon_btn.style.backgroundSize= "18px";
    }
});