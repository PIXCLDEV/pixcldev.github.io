
const projects = [
    {
        title: "Tiny Dream World",
        description: "A short 2D exploration game with custom movement, atmosphere, and shaders. Built in Unity and published on itch.io.",
        image: "assets/tdw/logo.png",
        status: "🎮 Released",
        videoId: "f-OY7djwrjc",
        link: "https://pixcl-studio.itch.io/tiny-dream-world",
        contributions: [
            "Custom Character Controller (Collide-and-Slide)",
            "Vegetation Compute Shader, URP Render Features",
            "Custom Level Design Tools",
            "Camera Cart System"
        ]
    },

    {
        title: "Spark's Adventure",
        description: "A short 2D exploration game with custom movement, atmosphere, and shaders. Built in Unity and published on itch.io.",
        image: "assets/sa2d/salogo.png",
        status: "🎮 Released",
        videoId: "-5pFz708OCw",
        link: "https://pixcl-studio.itch.io/sparks-adventure",
        contributions: [
            "Custom Character Controller (Collide-and-Slide)",
            "Vegetation Compute Shader, URP Render Features",
            "Custom Level Design Tools",
            "Camera Cart System"
        ]
    }
];

const prototypes = [
    {
        title: "Spark's Jump&Run",
        description: "A short 2D exploration game with custom movement, atmosphere, and shaders. Built in Unity and published on itch.io.",
        image: "voidspace-thumbnail.jpg",
        videoId: "Vsxyo3vzTy4",
        status: "🛠️ Prototype",
        link: "https://pixcl-studio.itch.io/sparks-adventure",
        contributions: [
            "Custom Character Controller (Collide-and-Slide)",
            "Vegetation Compute Shader, URP Render Features",
            "Custom Level Design Tools",
            "Camera Cart System"
        ]
    },
    {
        title: "Black Genesis",
        description: "A short 2D exploration game with custom movement, atmosphere, and shaders. Built in Unity and published on itch.io.",
        image: "voidspace-thumbnail.jpg",
        videoId: "Vsxyo3vzTy4",
        status: "🛠️ Prototype",
        link: "https://pixcl-studio.itch.io/sparks-adventure",
        contributions: [
            "Custom Character Controller (Collide-and-Slide)",
            "Vegetation Compute Shader, URP Render Features",
            "Custom Level Design Tools",
            "Camera Cart System"
        ]
    },
    {
        title: "Duskborne",
        description: "A short 2D exploration game with custom movement, atmosphere, and shaders. Built in Unity and published on itch.io.",
        image: "voidspace-thumbnail.jpg",
        videoId: "Vsxyo3vzTy4",
        status: "🛠️ Prototype",
        link: "https://pixcl-studio.itch.io/sparks-adventure",
        contributions: [
            "Custom Character Controller (Collide-and-Slide)",
            "Vegetation Compute Shader, URP Render Features",
            "Custom Level Design Tools",
            "Camera Cart System"
        ]
    }
];

function toggleVideo(button) {
    const projectCard = button.closest('.project-card');
    const videoSection = projectCard.querySelector('.project-extra');
    const isOpen = videoSection.classList.contains('open');

    videoSection.classList.toggle('open');
    button.textContent = isOpen ? '▶ Show More' : '▼ Show Less';
}

function generateProjectHTML(project) {
    const contributions = project.contributions
        .map(item => `<b><li>🔸 ${item}</li></b>`)
        .join("");

    return `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title} thumbnail" class="project-thumb" />
        <div class="project-content">
          <h3>${project.title}</h3>
          <span class="project-status">${project.status}</span>
          <p class="project-description">${project.description}</p>
          <ul class="project-details">${contributions}</ul>
          <a href="${project.link}" class="project-button" target="_blank">▶️ Play on Itch.io</a>
          <button class="media-toggle" onclick="toggleVideo(this)">▶ Show More</button>
        </div>
        <div class="project-extra">
            
            <div class="gallery-scroll">
              <div class="gallery-item">
                <iframe
                  src="https://www.youtube.com/embed/${project.videoId}"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="gallery-item"><img src="${project.image}" /></div>
              <div class="gallery-item"><img src="${project.image}" /></div>
              <div class="gallery-item"><img src="${project.image}" /></div>
              <div class="gallery-item"><img src="${project.image}" /></div>
            </div>
        </div>
    </div>
    `;
}
/**/
const container = document.getElementById("projects-container");
projects.forEach(project => {
    container.innerHTML += generateProjectHTML(project);
});

const container2 = document.getElementById("projects-container2");
prototypes.forEach(prototype => {
    container.innerHTML += generateProjectHTML(prototype);
});