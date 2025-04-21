function startTypewriter(element, text, speed = 100) {
    let index = 0;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = text;
    const textArray = Array.from(tempDiv.childNodes);

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);

            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

window.addEventListener("DOMContentLoaded", () => {
    const typewriterElement = document.getElementById('typewriter');
    const text = "Hi, I'm Elias Broschin.";
    startTypewriter(typewriterElement, text, 70);
});

function onElementEnter(entry, text, observerInstance) {
    const typewriterElement = entry.target;
    startTypewriter(typewriterElement, text, 70);
    observerInstance.unobserve(entry.target);
}

function createTypewriterObserver(elementId, labelText) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                onElementEnter(entry, labelText, observer);
            }
        });
    });

    const target = document.getElementById(elementId);
    if (!target) return;

    observer.observe(target);
}


createTypewriterObserver("typewriter2", "My Indie Games.");
createTypewriterObserver("typewriter3", "Professional Experience.");
createTypewriterObserver("typewriter4", "My Services.");
createTypewriterObserver("typewriter5", "About Me.");
createTypewriterObserver("typewriter6", "Contact Me.");