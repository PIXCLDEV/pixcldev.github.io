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

// Call the function in the external script
window.addEventListener("DOMContentLoaded", () => {
    const typewriterElement = document.getElementById('typewriter');
    const text = "Hey there! I'm PIXCLDEV, how can I help you?";
    typewriterEffect(typewriterElement, text, 70);
});