// Component loader
const components = {
    header: `
    <header>
    <div class="left-section">
        <div class="logo">
            <img class="logo-img" src="./assets/images/new-logo.jpeg" alt="TakeMeAway Logo">
            <!--  <div class="logo-title">Take me Away</div> -->
        </div>
    </div>

    <!-- Hamburger (visible only on mobile) -->
    <div class="hamburger" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <!-- Desktop Nav (visible only on large screens) -->
    <nav class="desktop-nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="categories.html">Journeys</a></li>
            <li><a href="retreats.html">Women-Only Retreats</a></li>
            <li><a href="about.html">Inspirational stories</a></li>
            <li><a href="blogs.html">Blogs</a></li>

        </ul>
    </nav>

    <!-- Mobile Nav (slide-in) -->
    <nav id="mobile-nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="categories.html">Journeys</a></li>
            <li><a href="retreats.html">Women-Only Retreats</a></li>
            <li><a href="about.html">Inspirational stories</a></li>
            <li><a href="blogs.html">Blogs</a></li>

        </ul>
    </nav>

    <div class="right-section"></div>
</header>
    `,
    footer: `
    <footer>
    <div class="footer-horizontal">
        <p>&copy; 2025 TakeMeAway. All rights reserved.</p>
        <div class="social-section">
            <a href="https://www.instagram.com/takemeaway.retreats/profilecard/?igsh=MTBxbGkzZXVjYnhxZg%3D%3D" target="_blank" aria-label="Instagram" class="instagram-link">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
                <span>takemeaway.retreats</span>
            </a>
        </div>
    </div>
</footer>
    `
};

// Function to load components
function loadComponents() {
    // Load header
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = components.header;
    }

    // Load footer
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = components.footer;
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents); 



function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
}

// Optional: close menu on outside click
window.addEventListener('click', function (e) {
    const nav = document.getElementById('mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
    }
});