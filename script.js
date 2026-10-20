lucide.createIcons();

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {
        themeButton.innerHTML = '<i data-lucide="sun"></i>';
    } else {
        themeButton.innerHTML = '<i data-lucide="moon"></i>';
    }

    lucide.createIcons();
});
