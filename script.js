document.addEventListener("DOMContentLoaded", function() { 
    var scrollTopButton = document.querySelector(".scroll-top"); 
    window.addEventListener("scroll", function() { 
        if (window.pageYOffset > 200) { 
            scrollTopButton.style.display = "block"; 
        } else { 
            scrollTopButton.style.display = "none"; 
        } 
    }); 
});