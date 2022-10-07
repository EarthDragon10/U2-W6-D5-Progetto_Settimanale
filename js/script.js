const headerElement = document.getElementById("header");
const mainElement = document.getElementById("main");
const footerElement = document.getElementById("footer");
const btnDarkMode = document.getElementById("change-DarkMode");
const linksItemHeader = document.querySelectorAll("#links ul > li > a");

console.log(linksItemHeader);

function changeDarkMode() {
	if (btnDarkMode.classList.value === "light-mode") {
		addDarkMode();
	} else {
		addLightMode();
	}

	// headerElement.classList.toggle("dark-mode");
}

function addDarkMode() {
	headerElement.classList.remove("light-mode");
	mainElement.classList.remove("light-mode");
	footerElement.classList.remove("light-mode");
	btnDarkMode.classList.remove("light-mode");

	headerElement.classList.add("dark-mode");
	mainElement.classList.add("dark-mode");
	footerElement.classList.add("dark-mode");
	btnDarkMode.classList.add("dark-mode");

	for (let i = 0; i < linksItemHeader.length; i++) {
		linksItemHeader[i].classList.remove("light-mode");
		linksItemHeader[i].classList.add("dark-mode");
	}
}

function addLightMode() {
	headerElement.classList.remove("dark-mode");
	mainElement.classList.remove("dark-mode");
	footerElement.classList.remove("dark-mode");
	btnDarkMode.classList.remove("dark-mode");

	headerElement.classList.add("light-mode");
	mainElement.classList.add("light-mode");
	footerElement.classList.add("light-mode");
	btnDarkMode.classList.add("light-mode");

	for (let i = 0; i < linksItemHeader.length; i++) {
		linksItemHeader[i].classList.remove("dark-mode");
		linksItemHeader[i].classList.add("light-mode");
	}
}
