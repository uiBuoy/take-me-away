// Component loader
const components = {
    header: `
        <header>
            <div class="left-section">
                <div class="logo">
                    <img width="120" height="120" style="border-radius: 8%;" src="./assets/images/new-logo.jpeg" alt="TakeMeAway Logo" class="log-icon">
                </div>
                <div class="logo-title">Take me Away</div>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="retreats.html">Women-Only Retreats</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
            <div class="right-section">
                <!-- Empty for now, you can add a login button, user profile, etc. -->
            </div>
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