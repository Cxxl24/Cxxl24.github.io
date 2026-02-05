// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinksMenu = document.getElementById('nav-links');
const contactBtn = document.getElementById('contact-btn');

if (menuToggle && navLinksMenu) {
	menuToggle.addEventListener('click', () => {
		const isActive = navLinksMenu.classList.toggle('active');
		menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
		menuToggle.textContent = isActive ? '✕' : '☰';
	});
}

// Contact button - navigate to contact page
if (contactBtn) {
	contactBtn.addEventListener('click', () => {
		window.location.href = 'contact.html';
	});
}

// Highlight active page in the navigation
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
	const linkPage = link.getAttribute('href');
	if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
		link.classList.add('active');
	}
});