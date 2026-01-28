document.getElementById("contact-btn").addEventListener("click", () => {
	document.getElementById("contact").scrollIntoView({
	behavior: "smooth"
	});
});

window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".navbar");

	if (window.scrollY > 50) {
		navbar.style.backgroundColor = "#000";
	} else {
		navbar.style.backgroundColor = "#222";
	}
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".slide-in").forEach(el => {
    observer.observe(el);
});