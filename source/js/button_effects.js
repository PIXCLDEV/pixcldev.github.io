document.querySelectorAll('.icon').forEach((button) => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

window.addEventListener("scroll", () => {
    const scrollIndicator = document.getElementById("scroll-indicator");

    if (window.scrollY > 10) {
        scrollIndicator.style.opacity = "0"; // Fade out the arrow
    } else {
        scrollIndicator.style.opacity = "1"; // Show the arrow if user scrolls back to top
    }
});
