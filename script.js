let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Manual controls
function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function applyFilters() {
    let clothingType = document.getElementById("clothingType").value;
    let bodyType = document.getElementById("bodyType").value;
    let color = document.getElementById("color").value;
    

    let items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
        // Check if item matches selected filters
        let matches = 
            (clothingType === "all" || item.classList.contains(clothingType)) &&
            (bodyType === "all" || item.classList.contains(bodyType)) &&
            (color === "all" || item.classList.contains(color)) ;

        // Show or hide item
        item.style.display = matches ? "block" : "none";
    });
}




const toggleButton = document.getElementById("darkModeToggle");

// Check if user has a saved preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️"; // Sun icon for light mode
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️"; // Change to sun icon
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙"; // Change to moon icon
    }
});
