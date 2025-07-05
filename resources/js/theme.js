function setThemeOnLoad() {
    if (localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}


function switchAppearanceTheme() {
    if (localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
    } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
    }
}

export {setThemeOnLoad, switchAppearanceTheme}
