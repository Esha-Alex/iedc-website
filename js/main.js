// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeModal = document.getElementById("themeModal");
const themeOverlay = document.getElementById("themeOverlay");
const closeThemeModal = document.getElementById("closeThemeModal");
const themeLightRadio = document.getElementById("themeLight");
const themeDarkRadio = document.getElementById("themeDark");
const html = document.documentElement;

// Initialize theme from localStorage or default to light
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}

// Set theme
function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  
  if (theme === "dark") {
    themeDarkRadio.checked = true;
  } else {
    themeLightRadio.checked = true;
  }
}

// Open theme modal
themeToggle.addEventListener("click", () => {
  themeModal.classList.add("active");
  themeOverlay.classList.add("active");
});

// Close theme modal
closeThemeModal.addEventListener("click", () => {
  themeModal.classList.remove("active");
  themeOverlay.classList.remove("active");
});

// Close modal when clicking overlay
themeOverlay.addEventListener("click", () => {
  themeModal.classList.remove("active");
  themeOverlay.classList.remove("active");
});

// Theme selection change
document.querySelectorAll('input[name="theme"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    setTheme(e.target.value);
  });
});

// Event Popup Functionality
const eventPopup = document.getElementById("eventPopup");
const eventDatabase = {
  "tech-workshop": {
    title: "Tech Workshop 2025",
    date: "2025-11-10",
    description: "A hands-on workshop on latest tech trends and innovations.",
    details: "Join us for an immersive workshop covering cutting-edge technology trends. Learn from industry experts about AI, Machine Learning, Cloud Computing, and Web Development. This workshop is open to all students and includes hands-on coding sessions, group discussions, and networking opportunities."
  },
  "science-fest": {
    title: "Annual Science Fest",
    date: "2025-12-05",
    description: "Celebrating innovation, research, and experiments by students.",
    details: "Our annual science festival celebrates student innovation and research. Participate in exciting demonstrations, poster presentations, and live experiments. Showcase your scientific projects and compete for exciting prizes. All students are welcome to participate or attend."
  },
  "entrepreneurship-webinar": {
    title: "Entrepreneurship Webinar",
    date: "2025-11-25",
    description: "Learn how to start and scale your startup with industry experts.",
    details: "Discover the secrets of successful entrepreneurship from seasoned founders and business leaders. This webinar covers business planning, funding strategies, marketing, and scaling your startup. Interactive Q&A session included. Perfect for aspiring entrepreneurs and startup enthusiasts."
  },
  "robotics-workshop": {
    title: "Robotics Workshop",
    date: "2025-12-15",
    description: "Hands-on robotics workshop for students interested in automation.",
    details: "Learn robotics fundamentals with hands-on experience. Build and program robots, learn about automation, and understand robotics applications in industry. This workshop covers basics to advanced robotics concepts. All skill levels welcome."
  },
  "ai-ml-bootcamp": {
    title: "AI & ML Bootcamp",
    date: "2025-12-22",
    description: "Intensive bootcamp covering AI, ML, and data science basics.",
    details: "An intensive bootcamp for mastering Artificial Intelligence and Machine Learning. Learn Python, data preprocessing, supervised and unsupervised learning, neural networks, and practical ML applications. Daily hands-on coding exercises and projects included."
  },
  "green-tech-hackathon": {
    title: "Green Tech Hackathon",
    date: "2025-11-30",
    description: "Hackathon focusing on sustainable and green technology solutions.",
    details: "Join our green tech hackathon to develop innovative solutions for environmental sustainability. Build projects using IoT, renewable energy, waste management technologies, or other green tech innovations. Win prizes, network with like-minded innovators, and make a difference."
  }
};

function openEventPopup(eventId) {
  const event = eventDatabase[eventId];
  if (event) {
    document.getElementById("eventTitle").textContent = event.title;
    document.getElementById("eventDate").textContent = event.date;
    document.getElementById("eventDescription").textContent = event.description;
    document.getElementById("eventDetails").textContent = event.details;
    eventPopup.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeEventPopup() {
  eventPopup.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close popup when clicking on background
eventPopup.addEventListener("click", (e) => {
  if (e.target === eventPopup) {
    closeEventPopup();
  }
});

// Initialize theme on page load
initializeTheme();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close modal if open
        themeModal.classList.remove("active");
        themeOverlay.classList.remove("active");
      }
    }
  });
});