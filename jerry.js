document.addEventListener('DOMContentLoaded', () => {
    const navUl = document.querySelector('nav ul');
    const menuIcon = document.querySelector('nav img[src="menu2.png"]');
    const closeIcon = document.querySelector('nav img[src="close.png"]');

    // Add classes for easier targeting
    menuIcon.classList.add('menu-icon');
    closeIcon.classList.add('close-icon');

    // Event listener for opening the navigation menu
    menuIcon.addEventListener('click', () => {
        navUl.classList.add('show-menu');
        menuIcon.style.display = 'none'; // Hide menu icon
        closeIcon.style.display = 'block'; // Show close icon
    });

    // Event listener for closing the navigation menu
    closeIcon.addEventListener('click', () => {
        navUl.classList.remove('show-menu');
        menuIcon.style.display = 'block'; // Show menu icon
        closeIcon.style.display = 'none'; // Hide close icon
    });

    // Close the menu if a link is clicked (for single-page navigation)
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Only close on smaller screens
                navUl.classList.remove('show-menu');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });
    });

    // Adjust menu icon visibility on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navUl.classList.remove('show-menu'); // Ensure menu is not "stuck" open
            menuIcon.style.display = 'none'; // Hide menu icon on larger screens
            closeIcon.style.display = 'none'; // Hide close icon on larger screens
        } else {
            // If the menu is currently closed, show the menu icon
            if (!navUl.classList.contains('show-menu')) {
                 menuIcon.style.display = 'block';
                 closeIcon.style.display = 'none';
            }
        }
    });

    // Initial check for icon visibility on page load
    if (window.innerWidth > 768) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});