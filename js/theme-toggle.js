document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
 
    // Check if dark mode was previously enabled
    const darkMode = localStorage.getItem('dark-mode') === 'enabled';
 
    if (darkMode) {
       body.classList.add('dark-mode');
       themeToggleButton.textContent = '🌞 Mode Clair';
    }
 
    themeToggleButton.addEventListener('click', () => {
       body.classList.toggle('dark-mode');
       const isDarkMode = body.classList.contains('dark-mode');
 
       themeToggleButton.textContent = isDarkMode ? '🌞 Mode Clair' : '🌚 Mode Sombre';
 
       // Save preference to localStorage
       localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
    });
 });
 