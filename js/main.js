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
  "xelerate-26": {
    image: "assets/events/xeleratenew.jpeg",
    title: "XELERATE'26",
    date: "Coming Soon",
    description: "XELERATE'26 — an upcoming startup acceleration program empowering students through mentorship, workshops, and networking.",
    details:
      "XELERATE'26 is the third edition of the startup support and acceleration program, following the successful execution of last year's edition. Designed to empower aspiring student entrepreneurs, the program will feature a series of hands-on workshops, mentorship sessions, and networking opportunities. Building on the impact of previous editions, XELERATE'26 aims to help students refine ideas, strengthen entrepreneurial skills, and develop scalable ventures.",
  },
  "influencer-summit": {
    image: "assets/events/science_fest.png",
    title: "Influencer Summit",
    date: "Coming Soon",
    description:
      "Influencer Summit — a grand conclave bringing leading influencers together to inspire, engage, and empower students.",
    details:
      "The Influencer Summit is a grand gathering that brings together renowned influencers from diverse domains to connect with the student community. Designed as an engaging and insightful experience, the summit offers students an opportunity to learn from real-world journeys, gain practical perspectives, and find inspiration beyond the classroom. By combining entertainment with meaningful discussions, the event aims to motivate students to think creatively, grow productively, and broaden their horizons.",
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
  "evoke": {
    image: "assets/events/evoke.jpeg",
    title: "EVOKE",
    date: "02-08-2025",
    description:
      "EVOKE — showcasing student innovation, by IEDC MACE × IoT MACE.",
    details:
      "EVOKE brings together innovative projects in a high-energy innovation showdown.The event features a competitive showdown with a ₹1 Lakh prize pool, celebrating creativity and execution.",
  },
  "hackify": {
    image: "assets/events/hackify.jpeg",
    title: "HACKIFY",
    date: "28-02-2025",
    description:
      "HACKIFY — a large-scale hackathon by IEDC MACE focused on solving real-world problems through innovation.",
    details:
      "HACKIFY is the flagship hackathon of IEDC MACE, designed to identify ideas that solve real-world problems with strong industry relevance and future potential. Conducted from February 28 to March 2, the event challenged innovators to build unique, scalable solutions. The hackathon featured a competitive environment with a ₹70,000 prize pool, fostering creativity, collaboration, and impact-driven innovation.",
  },
  "xelerate": {
    image: "assets/events/xeleratepast.jpeg",
    title: "XELERATE",
    date: "31-10-2024",
    description:
      "XELERATE — a flagship event by IEDC MACE, showcasing student innovation and entrepreneurship.",
    details:
      "XELERATE'24 is an intensive startup support program conducted on 31st October 2024, aimed at empowering aspiring student entrepreneurs. The initiative featured a series of workshops, mentorship sessions, and networking opportunities designed to strengthen startup ideas and entrepreneurial skills. Through multiple focused programs, XELERATE'24 provided students with the guidance and exposure needed to transform ideas into viable ventures.",
  },
};

function openEventPopup(eventId) {
  const event = eventDatabase[eventId];
  if (event) {
    const eventImage = document.getElementById("eventImage");
    if (event.image && event.image.trim() !== "") {
      eventImage.src = event.image;
      eventImage.style.display = "block";
    } else {
      eventImage.style.display = "none";
    }
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