const projects = [
    { title: "AI-Based Chatbot for Blind People", description: "A Generative AI chatbot for accessibility.", tech: ["Python", "GPT", "TTS", "STT"] },
    { title: "Deepfake Video Detector", description: "Detects deepfake videos using AI.", tech: ["TensorFlow", "OpenCV", "Streamlit"] },
    { title: "Open-World Game", description: "GTA-style game with vehicles and AI NPCs.", tech: ["Unity", "C#", "Blender"] },
];

document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");
    projects.forEach(proj => {
        let div = document.createElement("div");
        div.classList.add("project");
        div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p><strong>Tech:</strong> ${proj.tech.join(", ")}`;
        projectList.appendChild(div);
    });
});
