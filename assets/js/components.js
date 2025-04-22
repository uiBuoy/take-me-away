// Component loader
const components = {
    header: `
        <header>
            <div class="logo">
                <img width="40" height="40" style="border-radius: 50%;" src="./assets/images/logo.jpg" alt="TakeMeAway Logo" class="log-icon">
                <span>TakeMeAway</span>
            </div>
            <nav>
                <ul>
                    <li><a href="home.html">Home</a></li>
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
            <p>&copy; 2025 TakeMeAway. All rights reserved.</p>
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