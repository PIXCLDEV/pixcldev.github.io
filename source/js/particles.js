
function setupParticles(element) {
    particlesJS(element, {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: { value: "#fff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#fff" },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.5,
                width: 5,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        //interactivity: {
        //    detect_on: "canvas",
        //    events: {
        //        onhover: { enable: true, mode: "repulse" },
        //        onclick: { enable: true, mode: "push" },
        //        resize: true,
        //    },
        //    modes: {
        //        repulse: { distance: 100, duration: 0.4 },
        //        push: { particles_nb: 4 },
        //    },
        //},
        retina_detect: true,
    });
}

window.addEventListener("DOMContentLoaded", () => {
    setupParticles("particles-js");
    setupParticles("particles-js2");
});