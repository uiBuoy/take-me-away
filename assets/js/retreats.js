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


const registerBtn = document.getElementById("cta-button");
registerBtn.addEventListener('click', () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScTHWvx1RjT90TO0cteXsbdWv19sMJNpsA_SZc9fOCnLSX9nw/viewform", '_blank');
})