fetch('https://analytics-production-6b6b.up.railway.app', {  // Replace with your Railway URL
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ linkText, linkHref })
})

// This script will run as soon as the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor tags on the page
    const links = document.querySelectorAll("a");

    // Loop through all anchor tags
    links.forEach(link => {
        // Add a click event listener to each link
        link.addEventListener("click", function(event) {
            // Prevent the default link behavior (e.g., navigation) to allow data logging
            event.preventDefault();

            const linkText = link.innerText || link.href;  // Link text or href if text is empty
            const linkHref = link.href;

            // Send the click data to the backend
            fetch('/track-click', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    linkText: linkText,
                    linkHref: linkHref,
                }),
            })
            .then(response => response.json()) // Handle response if needed
            .then(data => {
                console.log('Click tracked:', data);
                
                // After tracking, manually trigger the link navigation
                window.location.href = linkHref;
            })
            .catch(error => {
                console.error("Error sending click data:", error);
                // In case of error, navigate the user to the link anyway
                window.location.href = linkHref;
            });
        });
    });
});
