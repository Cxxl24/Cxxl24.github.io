// Page Navigation
const navLinks = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');
const menuToggle = document.getElementById('menu-toggle');
const navLinksMenu = document.getElementById('nav-links');
const contactBtn = document.getElementById('contact-btn');

function showPage(pageId) {
	pages.forEach(page => {
		page.classList.remove('active');
	});
	const page = document.getElementById(pageId);
	if (page) {
		page.classList.add('active');
		page.focus({ preventScroll: true });
	}
}

// Navigation link click handling
navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const pageId = link.getAttribute('data-page');
		showPage(pageId);

		// Close mobile menu when a link is clicked
		if (navLinksMenu.classList.contains('active')) {
			navLinksMenu.classList.remove('active');
			menuToggle.textContent = '☰';
			menuToggle.setAttribute('aria-expanded', 'false');
		}
	});
});

// Hamburger menu toggle
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
		showPage('contact');
	});
}

// Initialize - show home page
showPage('home');