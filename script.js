// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Change icon
    if(document.body.classList.contains('dark')){
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});
