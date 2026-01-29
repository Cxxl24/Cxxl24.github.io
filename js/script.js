// Page Navigation
const navLinks = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');
const menuToggle = document.getElementById('menu-toggle');
const navLinksMenu = document.getElementById('nav-links');

function hidAllPages() {
	pages.forEach(page => page.classList.remove('active'));
}

function showPage(pageId) {
	hidAllPages();
	const page = document.getElementById(pageId);
	if (page) {
		page.classList.add('active');
	}
}

// Navigation link click handling
navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const pageId = link.getAttribute('data-page');
		showPage(pageId);
		
		// Close mobile menu when a link is clicked
		navLinksMenu.classList.remove('active');
		menuToggle.textContent = '☰';
	});
});

// Hamburger menu toggle
menuToggle.addEventListener('click', () => {
	navLinksMenu.classList.toggle('active');
	
	if (navLinksMenu.classList.contains('active')) {
		menuToggle.textContent = '✕';
	} else {
		menuToggle.textContent = '☰';
	}
});

// Contact button - navigate to contact page
document.getElementById('contact-btn').addEventListener('click', () => {
	showPage('contact');
});

// Initialize - show home page
showPage('home');