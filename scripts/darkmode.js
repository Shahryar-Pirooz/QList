function setCookie(name, value, days) {
    const d = new Date()
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/"
}

function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
}

function systemTheme() {
    const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    if (darkModeMql && darkModeMql.matches) {
        return "dark"
    } else {
         return "light"
    }
}

const savedTheme = getCookie("theme")
html.dataset.theme = savedTheme || systemTheme()

let menuStatus = bg.dataset.show

themeBtn.addEventListener("click" , function () {
        bg.classList.add("lg:flex")
})

bg.addEventListener("click" , function () {
    bg.classList.remove("lg:flex")
})

light.addEventListener("click" , function () {
    html.dataset.theme = "light"
    setCookie("theme", "light", 365);
})
dark.addEventListener("click" , function () {
    html.dataset.theme = "dark"
    setCookie("theme", "dark", 365);
})
system.addEventListener("click" , function () {
   html.dataset.theme = systemTheme()
   setCookie("theme", "", -1);
})