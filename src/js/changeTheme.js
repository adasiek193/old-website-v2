//  JAVASCRIPT CODE FOR CHANGING AND SAVING THEME (DARK, LIGHT)

// ICON CHANGE CONSTANT
const switchBtn = document.querySelector(".changetheme");

// CHANGING THEME ON CLICK

const toggle = () => {
	if (document.body.classList.contains("dark-mode")) {
		document.body.classList.remove("dark-mode");
		document.body.classList.add("light");
		localStorage.setItem("dark-mode", "false");
	} else {
		localStorage.setItem("dark-mode", "true");
		document.body.classList.add("dark-mode");
		document.body.classList.remove("light");
	}
};

// FUNCTION THAT SETTING THEME FROM LOCAL STORAGE

const themeSetting = () => {
	const savedTheme = localStorage.getItem("dark-mode");
	if (savedTheme === "true") {
		document.body.classList.add("dark-mode");
		document.body.classList.remove("light");
	} else if (savedTheme === "false") {
		document.body.classList.remove("dark-mode");
		document.body.classList.add("light");
	}
};

// CHANGING THEME WHEN CLICKING ICON

switchBtn.addEventListener("click", toggle);

// SETTING THEME FROM LOCAL STORAGE

themeSetting();
