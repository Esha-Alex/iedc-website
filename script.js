// ===== Settings Panel Toggle =====
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');

settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('active');
});

closeSettings.addEventListener('click', () => {
    settingsPanel.classList.remove('active');
});

// Close settings panel when clicking outside
document.addEventListener('click', (e) => {
    if (!settingsBtn.contains(e.target) && !settingsPanel.contains(e.target)) {
        settingsPanel.classList.remove('active');
    }
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.remove('light-theme', 'dark-theme');
body.classList.add(savedTheme + '-theme');

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// ===== Smooth Scroll =====
const navLinks = document.querySelectorAll('.nav-btn, .mobile-nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== FAQ Accordion =====
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements with data-scroll-animate
document.querySelectorAll('[data-scroll-animate]').forEach(el => {
    scrollObserver.observe(el);
});

// ===== Events Data =====
const upcomingEventsData = [
    {
        title: 'Startup Weekend 2026',
        date: 'February 15-17, 2026',
        description: '48-hour event where you can pitch ideas, form teams, and build prototypes. Network with mentors and investors.',
        details: 'Join us for an intensive weekend of innovation! This event brings together aspiring entrepreneurs, developers, designers, and business professionals. You\'ll have the opportunity to pitch your idea, find co-founders, and build a working prototype in just 48 hours. Expert mentors will guide you through the process, and you\'ll present to a panel of judges for a chance to win funding and support for your startup.',
        icon: '🚀'
    },
    {
        title: 'Tech Talk: AI in Entrepreneurship',
        date: 'February 28, 2026',
        description: 'Industry leaders discuss how AI is transforming startups and creating new opportunities.',
        details: 'Discover how artificial intelligence is revolutionizing the startup ecosystem. Our expert speakers will share insights on leveraging AI for business growth, automating processes, and creating innovative products. Perfect for entrepreneurs looking to stay ahead of the curve.',
        icon: '🤖'
    },
    {
        title: 'Pitch Perfect Competition',
        date: 'March 10, 2026',
        description: 'Present your startup idea to investors and judges. Winner receives seed funding and mentorship.',
        details: 'This is your chance to shine! Pitch your business idea in front of real investors and industry experts. The competition includes multiple rounds, with finalists receiving personalized feedback. Grand prize includes seed funding, 3 months of mentorship, and access to our incubator facilities.',
        icon: '💡'
    }
];

const pastEventsData = [
    {
        title: 'Innovation Summit 2025',
        date: 'December 10, 2025',
        description: 'A day-long summit featuring keynote speakers, panel discussions, and networking opportunities.',
        details: 'Our biggest event of 2025 brought together over 500 participants, 20+ speakers, and numerous startups. The event featured inspiring keynotes, interactive workshops, and valuable networking sessions.',
        icon: '🎯'
    },
    {
        title: 'Hackathon Fall 2025',
        date: 'November 5-6, 2025',
        description: '24-hour coding marathon focused on solving real-world problems through technology.',
        details: 'Teams competed to build innovative solutions addressing challenges in healthcare, education, and sustainability. Winners received prizes totaling ₹1 lakh and mentorship opportunities.',
        icon: '💻'
    },
    {
        title: 'Workshop: Business Model Canvas',
        date: 'October 20, 2025',
        description: 'Hands-on workshop teaching entrepreneurs how to create effective business models.',
        details: 'Participants learned the fundamentals of the Business Model Canvas framework and applied it to their own startup ideas. The workshop included group exercises and one-on-one mentoring sessions.',
        icon: '📊'
    }
];

// ===== Render Events =====
function renderEvents(events, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    events.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-image">${event.icon}</div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <p class="event-date-badge">${event.date}</p>
                <p>${event.description}</p>
            </div>
        `;
        
        eventCard.addEventListener('click', () => openEventModal(event));
        container.appendChild(eventCard);
    });
}

// Initial render
renderEvents(upcomingEventsData, 'upcomingEvents');
renderEvents(pastEventsData, 'pastEvents');

// ===== Event Tabs =====
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        
        // Update active button
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show/hide event grids
        if (tab === 'upcoming') {
            document.getElementById('upcomingEvents').classList.remove('hidden');
            document.getElementById('pastEvents').classList.add('hidden');
        } else {
            document.getElementById('upcomingEvents').classList.add('hidden');
            document.getElementById('pastEvents').classList.remove('hidden');
        }
    });
});

// ===== Event Modal =====
const eventModal = document.getElementById('eventModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

function openEventModal(event) {
    modalBody.innerHTML = `
        <div style="text-align: center; font-size: 4rem; margin-bottom: 20px;">${event.icon}</div>
        <h2>${event.title}</h2>
        <p style="color: var(--accent-color); font-weight: 600; font-size: 1.1rem; margin-bottom: 20px;">${event.date}</p>
        <p style="font-size: 1.1rem; line-height: 1.8;">${event.details}</p>
    `;
    eventModal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    eventModal.classList.remove('active');
});

eventModal.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        eventModal.classList.remove('active');
    }
});

// ===== Startup Stories Data =====
const startupStories = [
    {
        name: 'EduTech Pro',
        logo: 'EP',
        description: 'An AI-powered learning platform that personalizes education for every student. Now serving 50,000+ students across India.'
    },
    {
        name: 'GreenPath',
        logo: 'GP',
        description: 'Sustainable transportation app connecting eco-conscious commuters. Reduced carbon emissions by 500 tons in the first year.'
    },
    {
        name: 'HealthTrack',
        logo: 'HT',
        description: 'Smart health monitoring system making healthcare accessible to rural communities. Impacted 10,000+ lives.'
    }
];

function renderStartups() {
    const container = document.querySelector('.stories-grid');
    container.innerHTML = '';
    
    startupStories.forEach(startup => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.setAttribute('data-scroll-animate', '');
        card.innerHTML = `
            <div class="story-logo">${startup.logo}</div>
            <h3>${startup.name}</h3>
            <p>${startup.description}</p>
        `;
        container.appendChild(card);
    });
    
    // Re-observe new elements
    container.querySelectorAll('[data-scroll-animate]').forEach(el => {
        scrollObserver.observe(el);
    });
}

renderStartups();

// ===== Team Data =====
const coreTeam = [
    { name: 'Arjun Menon', role: 'Chief Executive Officer', emoji: '👨‍💼' },
    { name: 'Priya Nair', role: 'Chief Technology Officer', emoji: '👩‍💻' },
    { name: 'Karthik Kumar', role: 'Event Coordinator', emoji: '👨‍🎓' },
    { name: 'Sneha Raj', role: 'Creative Head', emoji: '👩‍🎨' },
    { name: 'Rahul Varma', role: 'Marketing Lead', emoji: '👨‍💼' },
    { name: 'Anjali Krishnan', role: 'Finance Manager', emoji: '👩‍💼' }
];

const execomTeam = [
    { name: 'Vivek Pillai', role: 'Web Development Lead', emoji: '👨‍💻' },
    { name: 'Meera Das', role: 'Design Lead', emoji: '👩‍🎨' },
    { name: 'Aditya Sharma', role: 'Content Writer', emoji: '✍️' },
    { name: 'Lakshmi Menon', role: 'Social Media Manager', emoji: '📱' },
    { name: 'Nikhil George', role: 'Partnership Coordinator', emoji: '🤝' },
    { name: 'Divya Nambiar', role: 'Workshop Coordinator', emoji: '📚' },
    { name: 'Rohan Iyer', role: 'Technical Support', emoji: '🔧' },
    { name: 'Pooja Krishnan', role: 'PR & Communications', emoji: '📢' }
];

function renderTeam() {
    const container = document.querySelector('.team-grid');
    container.innerHTML = '';
    
    coreTeam.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-image">${member.emoji}</div>
            <h3>${member.name}</h3>
            <p class="team-role">${member.role}</p>
        `;
        container.appendChild(card);
    });
}

renderTeam();

// ===== Execom Modal =====
const execomModal = document.getElementById('execomModal');
const closeExecom = document.getElementById('closeExecom');
const seeMoreBtn = document.getElementById('seeMoreTeam');
const execomGrid = document.getElementById('execomGrid');

seeMoreBtn.addEventListener('click', () => {
    execomGrid.innerHTML = '';
    
    execomTeam.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-image">${member.emoji}</div>
            <h3>${member.name}</h3>
            <p class="team-role">${member.role}</p>
        `;
        execomGrid.appendChild(card);
    });
    
    execomModal.classList.add('active');
});

closeExecom.addEventListener('click', () => {
    execomModal.classList.remove('active');
});

execomModal.addEventListener('click', (e) => {
    if (e.target === execomModal) {
        execomModal.classList.remove('active');
    }
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // Press ESC to close modals
    if (e.key === 'Escape') {
        eventModal.classList.remove('active');
        execomModal.classList.remove('active');
    }
});

// ===== Scroll to Top on Page Load =====
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Parallax Effect for Hero Background (Optional) =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Console Message =====
console.log('%c🚀 IEDC MACE Website 🚀', 'color: #FFD700; font-size: 24px; font-weight: bold;');
console.log('%cInnovate • Ideate • Create', 'color: #001f3f; font-size: 16px;');
console.log('%cBuilt with passion by IEDC MACE Team', 'color: #666; font-size: 14px;');

// ===== Add smooth reveal animation to facility cards =====
const facilityCards = document.querySelectorAll('.facility-card');
facilityCards.forEach(card => scrollObserver.observe(card));
