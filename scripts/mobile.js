const mLight = document.getElementById("mobile_theme_light")
const mDark = document.getElementById("mobile_theme_dark")
const mSystem = document.getElementById("mobile_theme_system")
const mobileMenu = document.getElementById("mobile_menu")
const mobileBgMenu = document.getElementById("mobile_bg_menu")

mobileMenu.addEventListener("click", function () {
    const isOpened = mobileMenu.dataset.opened == "false" ? "true" : "false"
    mobileMenu.dataset.opened = isOpened
    if (isOpened == "true"){
        mobileBgMenu.classList.remove("hidden")
        mobileBgMenu.classList.add("block")
    } else {
        mobileBgMenu.classList.remove("block")
        mobileBgMenu.classList.add("hidden")
    }
})
mLight.addEventListener("click" , function () {
    html.dataset.theme = "light"
    setCookie("theme", "light", 365)
})
mDark.addEventListener("click" , function () {
    html.dataset.theme = "dark"
    setCookie("theme", "dark", 365)
})
mSystem.addEventListener("click" , function () {
   html.dataset.theme = systemTheme()
   setCookie("theme", "", -1)
})