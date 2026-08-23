/* =========================================================
   FLOATING HOME BUTTON
   ========================================================= */

const homeButton = document.createElement("a");

homeButton.href = "index.html";
homeButton.className = "floating-home";
homeButton.title = "Back to Home";
homeButton.setAttribute("aria-label", "Back to Home");

homeButton.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10.5L12 3l9 7.5"></path>
        <path d="M5 9.5V21h14V9.5"></path>
        <path d="M9 21v-6h6v6"></path>
    </svg>
`;

document.body.appendChild(homeButton);
