
const projects = [
    {
        title: "Tiny Dream World",
        description: "A tiny but tidy cozy game with randomized exploration and casual farming, fishing and animal rescue mechanics.",
        image: "assets/tdw/logo.png",
        status: "🎮 Full Game (2025)",
        videoId: "f-OY7djwrjc",
        link: "https://pixcl-studio.itch.io/tiny-dream-world",
        screenshots: [
            "assets/tdw/tdw0.gif",
            "assets/tdw/tdw1.png",
            "assets/tdw/tdw02.gif",
            "assets/tdw/tdw2.png",
            "assets/tdw/tdw3.png",
            "assets/tdw/tdw4.png",
            "assets/tdw/tdw5.png"
        ],
        highlights: [
            "Crisp pixel art, fonts and camera control",
            "Custom-made tools for dialogues and cutscenes",
            "Custom-made sprite shaders and VFX",
            "Full asset integration (sound, music, spritesheets)"
        ]
    },
    {
        title: "Spark's Adventure 3D",
        description: "My first self-published game title reimagined as a 3D collectathon platformer inspired by PSX classics.",
        image: "assets/sa3d/cover.png",
        videoId: "EmcdGMkryRQ",
        status: "🛠️ Playable Prototype (2025)",
        link: "https://pixcl-studio.itch.io/sparks-adventure-3d",
        screenshots: [
            "assets/sa3d/sa3d0.gif",
            "assets/sa3d/sa3d1.png",
            "assets/sa3d/sa3d2.png",
            "assets/sa3d/sa3d3.gif",
            "assets/sa3d/sa3d4.png",
            "assets/sa3d/sa3d5.gif",
            "assets/sa3d/sa3d6.png"
        ],
        highlights: [
            "100% solo-dev including asset and tool creation",
            "Custom-made character controller (collide-and-slide)",
            "Custom-made level design, terrain and camera tools",
            "Custom-made PSX shaders and post-processing"
        ]
    },
    {
        title: "Spark's Adventure",
        description: "A 2D bullet hell exploration game with light souls-like mechanics. My first self-published game title.",
        image: "assets/sa2d/salogo.png",
        status: "🎮 Full Game (2021)",
        videoId: "-5pFz708OCw",
        link: "https://pixcl-studio.itch.io/sparks-adventure",
        screenshots: [
            "assets/sa2d/sa2d0.png",
            "assets/sa2d/sa2d1.png",
            "assets/sa2d/sa2d2.png",
            "assets/sa2d/sa2d3.png",
            "assets/sa2d/sa2d4.png",
            "assets/sa2d/sa2d5.png"
        ],
        highlights: [
            "Available for WebGL and PC",
            "Sequence system for boss fight patterns",
            "Bullet pattern systems for enemies and weapon-types",
            "Elemental interaction and weakness system"
        ]
    }
];

//const prototypes = [
//    {
//        title: "Black Genesis",
//        description: "A short 2D exploration game with custom movement, atmosphere, and shaders. Built in Unity and published on itch.io.",
//        image: "voidspace-thumbnail.jpg",
//        videoId: "Vsxyo3vzTy4",
//        status: "🛠️ Prototype",
//        link: "https://pixcl-studio.itch.io/sparks-adventure",
//        contributions: [
//            "Custom Character Controller (Collide-and-Slide)",
//            "Vegetation Compute Shader, URP Render Features",
//            "Custom Level Design Tools",
//            "Camera Cart System"
//        ]
//    },
//    {
//        title: "Duskborne",
//        description: "A short 2D exploration game with custom movement, atmosphere, and shaders. Built in Unity and published on itch.io.",
//        image: "voidspace-thumbnail.jpg",
//        videoId: "Vsxyo3vzTy4",
//        status: "🛠️ Prototype",
//        link: "https://pixcl-studio.itch.io/sparks-adventure"
//        contributions: [
//            "Custom Character Controller (Collide-and-Slide)",
//            "Vegetation Compute Shader, URP Render Features",
//            "Custom Level Design Tools",
//            "Camera Cart System"
//        ]
//    }
//];

function toggleVideo(button) {
    const projectCard = button.closest('.project-card');
    const videoSection = projectCard.querySelector('.project-extra');
    const isOpen = videoSection.classList.contains('open');

    videoSection.classList.toggle('open');
    button.innerHTML = isOpen ? '<i class="fa-solid fa-caret-right"></i> Show More' : '<i class="fa-solid fa-caret-down"></i> Show Less';
}

function generateProjectHTML(project) {
    const highlights = project.highlights
        .map(item => `<b><li>🔸 ${item}</li></b>`)
        .join("");

    const screenshots = project.screenshots
        .map(item => `<div class="gallery-item"><img src="${item}" /></div>`)
        .join("");

    return `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title} thumbnail" class="project-thumb" />
        <div class="project-content">
          <h3>${project.title}</h3>
          <span class="project-status">${project.status}</span>
          <p class="project-description">${project.description}</p>
          <ul class="project-details">${highlights}</ul>
          <a href="${project.link}" class="project-button" target="_blank"><i class="fa-brands fa-itch-io"></i> Play on itch.io</a>
          <a href="javascript:void(0)" class="media-toggle" onclick="toggleVideo(this)"><i class="fa-solid fa-caret-right"></i> Show More</a>

        </div>
        <div class="project-extra">
            <div class="gallery-scroll">
              <div class="gallery-item">
                <iframe src="https://www.youtube.com/embed/${project.videoId}" frameborder="0" allowfullscreen></iframe>
              </div>
              ${screenshots}
            </div>
        </div>
    </div>
    `;
}

const container = document.getElementById("projects-container");
projects.forEach(project => {
    container.innerHTML += generateProjectHTML(project);
});

//const container2 = document.getElementById("projects-container2");
//prototypes.forEach(prototype => {
//    container.innerHTML += generateProjectHTML(prototype);
//});