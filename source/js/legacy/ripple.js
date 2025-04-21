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
