//function typewriterEffect(element, text, speed = 100) {
//    let index = 0;

//    // Set the blinking animation for the element itself
//    element.style.animation = 'blink 1.3s steps(1) infinite';

//    function type() {
//        if (index < text.length) {
//            element.textContent += text.charAt(index);
//            index++;
//            setTimeout(type, speed);
//        }
//    }

//    type();
//}

function typewriterEffect(element, text, speed = 100) {
    let index = 0;

    // Set the blinking animation for the element itself
    element.style.animation = 'blink 1.3s steps(1) infinite';

    // Parse the HTML content
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
    const text = "Hey there! I'm PIXCLDEV.";
    typewriterEffect(typewriterElement, text, 70);
});


// Define the function to be called when the element enters the viewport
function onElementEnter(entry) {
    const typewriterElement = document.getElementById('typewriter2');
    const text = "My Unity Expertise.";
    typewriterEffect(typewriterElement, text, 70);
    // Stop observing the element after it's triggered the first time
    observer.unobserve(entry.target);
}

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            onElementEnter(entry);
        }
    });
});

// Select the target element
const target = document.getElementById("typewriter2");

// Start observing the target element
observer.observe(target);
