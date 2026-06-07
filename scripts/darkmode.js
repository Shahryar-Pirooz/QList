const themeBtn = document.getElementById("theme_btn")
const bg = document.getElementById("bg_menu")
const html = document.getElementsByTagName("html")[0]
const light = document.getElementById("theme_light")
const dark = document.getElementById("theme_dark")
const system = document.getElementById("theme_system")

function systemTheme() {
    const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMql && darkModeMql.matches) {
        return "dark"
    } else {
         return "light"
    }
}

html.dataset.theme = systemTheme()

let menuStatus = bg.dataset.show

themeBtn.addEventListener("click" , function () {
        bg.classList.add("lg:flex")
})

bg.addEventListener("click" , function () {
    bg.classList.remove("lg:flex")
})

light.addEventListener("click" , function () {
    html.dataset.theme = "light"
})
dark.addEventListener("click" , function () {
    html.dataset.theme = "dark"
})
system.addEventListener("click" , function () {
   html.dataset.theme = systemTheme()
})