const switchIcon = document.querySelector('.changetheme');

switchIcon.addEventListener("click", () => {
    document.querySelector('body').classList.toggle('light');
})
