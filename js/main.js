// Mobile Navigation Functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".nav-links a");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    mainNav.classList.toggle("active");
    document.body.style.overflow = mainNav.classList.contains("active")
      ? "hidden"
      : "auto";
  });
}

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
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
}

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });
}

// Event Popup Functionality
const eventPopup = document.getElementById("eventPopup");
const eventDatabase = {
  "tech-workshop": {
    image: "assets/events/tech_workshop.png",
    title: "Tech Workshop 2025",
    date: "2025-11-10",
    description: "A hands-on workshop on latest tech trends and innovations.",
    details:
      "Join us for an immersive workshop covering cutting-edge technology trends. Learn from industry experts about AI, Machine Learning, Cloud Computing, and Web Development. This workshop is open to all students and includes hands-on coding sessions, group discussions, and networking opportunities.",
  },
  "science-fest": {
    image: "assets/events/science_fest.png",
    title: "Annual Science Fest",
    date: "2025-12-05",
    description:
      "Celebrating innovation, research, and experiments by students.",
    details:
      "Our annual science festival celebrates student innovation and research. Participate in exciting demonstrations, poster presentations, and live experiments. Showcase your scientific projects and compete for exciting prizes. All students are welcome to participate or attend.",
  },
  "entrepreneurship-webinar": {
    image: "assets/events/entrepreneurship_webinar.png",
    title: "Entrepreneurship Webinar",
    date: "2025-11-25",
    description:
      "Learn how to start and scale your startup with industry experts.",
    details:
      "Discover the secrets of successful entrepreneurship from seasoned founders and business leaders. This webinar covers business planning, funding strategies, marketing, and scaling your startup. Interactive Q&A session included. Perfect for aspiring entrepreneurs and startup enthusiasts.",
  },
  "robotics-workshop": {
    image: "assets/events/robotics_workshop.png",
    title: "Robotics Workshop",
    date: "2025-12-15",
    description:
      "Hands-on robotics workshop for students interested in automation.",
    details:
      "Learn robotics fundamentals with hands-on experience. Build and program robots, learn about automation, and understand robotics applications in industry. This workshop covers basics to advanced robotics concepts. All skill levels welcome.",
  },
  "ai-ml-bootcamp": {
    image: "assets/events/ai_ml_bootcamp.png",
    title: "AI & ML Bootcamp",
    date: "2025-12-22",
    description:
      "Intensive bootcamp covering AI, ML, and data science basics.",
    details:
      "An intensive bootcamp for mastering Artificial Intelligence and Machine Learning. Learn Python, data preprocessing, supervised and unsupervised learning, neural networks, and practical ML applications. Daily hands-on coding exercises and projects included.",
  },
  "green-tech-hackathon": {
    image: "assets/events/green_tech_hackathon.png",
    title: "Green Tech Hackathon",
    date: "2025-11-30",
    description:
      "Hackathon focusing on sustainable and green technology solutions.",
    details:
      "Join our green tech hackathon to develop innovative solutions for environmental sustainability. Build projects using IoT, renewable energy, waste management technologies, or other green tech innovations. Win prizes, network with like-minded innovators, and make a difference.",
  },
};

function openEventPopup(eventId) {
  const event = eventDatabase[eventId];
  if (event) {
    document.getElementById("eventImage").src = event.image;
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
if (eventPopup) {
  eventPopup.addEventListener("click", (e) => {
    if (e.target === eventPopup) {
      closeEventPopup();
    }
  });
}

// Initialize theme on page load
initializeTheme();

// Vanta.js Effect Handling
let vantaEffect = null;

function setVanta(theme) {
  if (vantaEffect) {
    vantaEffect.destroy();
  }

  if (window.VANTA) {
    const config = {
      el: "#home",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      size: 1.5,
      yOffset: -0.1, // Shift slightly up/down if needed
    };

    if (theme === "light") {
      // Light Mode: Destroy Vanta (Use CSS Gradient instead)
      if (vantaEffect) {
        vantaEffect.destroy();
        vantaEffect = null;
      }
      return;
    }

    // Dark Mode: Initialize Vanta Rings
    if (!vantaEffect) {
      vantaEffect = VANTA.RINGS({
        el: "#home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0d1117,
        color: 0xffd24a
      });
    }
  }
}

// Update Vanta on theme toggle
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Wait for theme attribute to update
    setTimeout(() => {
      const currentTheme = html.getAttribute("data-theme") || "light";
      setVanta(currentTheme);
    }, 50);
  });
}

// Initial Load
const initialTheme = localStorage.getItem("theme") || "light";
setVanta(initialTheme);

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
          block: "start"
        });
      }
    }
  });
});


// Scroll to Top & Progress Logic
const progressPath = document.querySelector('.progress-wrap path');
if (progressPath) {
  const pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  const updateProgress = function () {
    const scroll = window.scrollY || window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }

  updateProgress();
  window.addEventListener('scroll', updateProgress);

  const offset = 50;
  window.addEventListener('scroll', function () {
    if (window.scrollY > offset) {
      document.querySelector('.progress-wrap').classList.add('active-progress');
    } else {
      document.querySelector('.progress-wrap').classList.remove('active-progress');
    }
  });

  document.querySelector('.progress-wrap').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return false;
  });
}

/* ============================
   Dynamic Extended Team Rendering
============================ */
document.addEventListener("DOMContentLoaded", () => {
  const teamGrid = document.getElementById("extended-team-grid");
  const seeMoreBtn = document.getElementById("see-more-btn");

  if (teamGrid && window.teamData) {
    // Explanation: The first 6 members (Christy to Maria) are hardcoded in index.html as "Core Team".
    // We start rendering dynamic members from Index 6 (Neeraj) onwards.
    const dynamicMembers = window.teamData.slice(6);

    const INITIAL_SHOW_COUNT = 3; // Show Neeraj, Malavika, Adhil initially
    let isExpanded = false;

    // Render Function
    function renderMembers(count) {
      teamGrid.innerHTML = ""; // Clear existing content

      const membersToShow = isExpanded ? dynamicMembers : dynamicMembers.slice(0, count);

      membersToShow.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("team-card");

        // Handle Photo vs Placeholder
        let imageHTML = "";
        let imgClass = "team-card-image";

        // Simple heuristic: if photo path is basically empty or placeholder, show emoji.
        // But here we set paths in teamData.js. We assume they exist.
        // We add an error handler to revert to emoji if image fails.
        imageHTML = `<img src="${member.photo}" alt="${member.name}" class="${imgClass}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'team-card-image placeholder\\'>👤</div>'">`;

        card.innerHTML = `
          ${imageHTML}
          <div class="team-card-content">
            <h4>${member.name}</h4>
            <p class="team-card-role">${member.position}</p>
          </div>
        `;
        teamGrid.appendChild(card);
      });

      // Update Button Text and Visibility
      if (dynamicMembers.length <= count && !isExpanded) {
        // If total members fit in initial count, hide button? 
        // Or if expanded and showing all.
        // Better logic:
        if (dynamicMembers.length <= count) {
          seeMoreBtn.style.display = "none";
        }
      } else {
        seeMoreBtn.style.display = "inline-block";
        seeMoreBtn.textContent = isExpanded ? "Show Less" : "See More";
      }
    }

    // Initial Render
    renderMembers(INITIAL_SHOW_COUNT);

    // Button Click Handler
    seeMoreBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      renderMembers(INITIAL_SHOW_COUNT); // Render all if expanded, or initial if collapsed
    });
  }
});