window.addEventListener("scroll", () => {
    const scrollIndicator = document.getElementById("scroll-indicator");
    scrollIndicator.style.opacity = (window.scrollY > 10) ? "0" : "1";
});
