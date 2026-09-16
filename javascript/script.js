document.addEventListener("DOMContentLoaded", function () { 
 
    /* ========================= 
       DATE 
    ========================= */ 
 
    const today = new Date(); 
 
    const dateElement = document.getElementById("date"); 
 
    if (dateElement) { 
        dateElement.textContent = today.toDateString(); 
    } 
 
 
    /* ========================= 
       THEME 
    ========================= */ 
 
    const themeToggle = document.getElementById("theme-toggle"); 
 
    // Get the saved theme 
    const savedTheme = localStorage.getItem("theme"); 
 
    // Apply saved theme 
    if (savedTheme === "light") { 
        document.body.classList.add("light-mode"); 
    } 
 
 
    /* ========================= 
       THEME BUTTON 
    ========================= */ 
 
    if (themeToggle) { 
 
        function updateThemeButton() { 
 
            if (document.body.classList.contains("light-mode")) { 
                themeToggle.textContent = "Cosmos ☀️"; 
            } else { 
                themeToggle.textContent = "Luna 🌙"; 
            } 
 
        } 
 
 
        // Set button text when page loads 
        updateThemeButton(); 
 
 
        // Change theme when clicked 
        themeToggle.addEventListener("click", function () { 
 
            const isLight = 
                document.body.classList.contains("light-mode"); 
 
            if (isLight) { 
 
                document.body.classList.remove("light-mode"); 
 
                localStorage.setItem("theme", "dark"); 
 
            } else { 
 
                document.body.classList.add("light-mode"); 
 
                localStorage.setItem("theme", "light"); 
 
            } 
 
            updateThemeButton(); 
 
        }); 
 
    } 
 
}); 


const greeting = document.getElementById("greeting"); 
 
const hour = new Date().getHours(); 
 
if (hour < 12) { 
    greeting.textContent = "Good morning!"; 
} else if (hour < 18) { 
    greeting.textContent = "Good afternoon!"; 
} else { 
    greeting.textContent = "Good evening!"; 
}


/* =========================
   PROJECT FILTERING
========================= */

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".projects");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;


        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        projectCards.forEach(function (project) {

            const category = project.dataset.category;

            if (filter === "all" || category === filter) {

                project.style.display = "";

            } else {

                project.style.display = "none";

            }

        });

    });

});
