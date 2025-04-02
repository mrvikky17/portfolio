document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero .play-btn", { duration: 1, scale: 0.5, opacity: 0, ease: "bounce.out", delay: 0.6 });
});
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if there's a saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
} else {
  body.classList.add('light-mode');
}

// Toggle between dark and light mode
themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
});
document.getElementById('letstalk-button').addEventListener('click', function() {
    // Replace 'yourusername' with your Instagram username and 'Hello!' with your pre-filled message
    const instagramLink = 'https://instagram.com/direct/new/?text=Hello%20I%20would%20like%20to%20chat&recipient_id=vikky_kush_17';
    
    // Open Instagram Direct Message
    window.open(instagramLink, '_blank');
  });

  const skillDescriptions = {
    "ml": "Machine Learning: Creating models that learn from data to make predictions and decisions.",
    "ai": "Artificial Intelligence: Building smart systems that can perceive, learn, and make decisions.",
    "web": "Web Development: Developing interactive and responsive websites using modern technologies.",
    "java": "Java: A powerful object-oriented programming language used in software development.",
    "python": "Python: A versatile programming language known for its simplicity and AI capabilities.",
      "git": "Git: A version control system that helps manage code changes efficiently."
};

// Handle hover effect
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseover", function() {
        const skillType = this.getAttribute("data-skill");
        document.getElementById("skill-title").innerText = this.querySelector("h3").innerText;
        document.getElementById("skill-description").innerText = skillDescriptions[skillType];
    });

    card.addEventListener("mouseleave", function() {
        document.getElementById("skill-title").innerText = "Select a Skill";
        document.getElementById("skill-description").innerText = "Hover over a skill to see details.";
    });
});

document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseover", function () {
        const skillKey = this.dataset.skill;
        document.getElementById("skill-title").textContent = skills[skillKey].title;
        document.getElementById("skill-description").textContent = skills[skillKey].description;
    });
});
