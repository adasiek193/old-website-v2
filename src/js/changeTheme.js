const switchBtn = document.querySelector('.changetheme')

const toggleTheme = () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light');
        localStorage.setItem('dark-mode', 'false');
    } else {
        localStorage.setItem('dark-mode', 'true');
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light');
    }
};

const setThemeOnLaunch = () => {
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light');
    } else if (savedTheme === 'false') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light');
    }
};

switchBtn.addEventListener('click', toggleTheme);

setThemeOnLaunch();
