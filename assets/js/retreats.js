// collapsed and un-collapsed accordion

document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector(".icon");

            if (content.style.display === "block") {
                content.style.display = "none";
                icon.textContent = "+";
            } else {
                document.querySelectorAll(".accordion-content").forEach((item) => item.style.display = "none");
                document.querySelectorAll(".icon").forEach((icon) => icon.textContent = "+");

                content.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});


// toggle show more button inside to accorion content
document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-more-button");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const moreContent = this.nextElementSibling;
            const isVisible = moreContent.style.display === "block";

            moreContent.style.display = isVisible ? "none" : "block";
            this.textContent = isVisible ? "Show more ▼" : "Show less ▲";
        });
    });
});


// to open google form by cliking to "Register Now"
const registerBtn = document.getElementById("cta-button");
registerBtn.addEventListener('click', () => {
    window.open("https://docs.google.com/forms/d/1N4Dm4x0OIXJ92R5VHb1HlvjQvvuUtKDW_SETDStz8Dc", '_blank');
})



