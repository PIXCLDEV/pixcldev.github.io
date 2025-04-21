function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToBottom() {
    window.scrollBy({
        top: 999999,
        behavior: 'smooth'
    });
}

function scrollToSection(id, offset = 100) {
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
}