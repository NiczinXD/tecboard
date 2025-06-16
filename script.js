document.addEventListener('DOMContentLoaded', () => {
    const darkThemeIcon = './imagens/Escuro.png';
    const lightThemeIcon = './imagens/Luz.png';
    const themeToggleButton = document.getElementById('themeToggleButton');
    const logo = document.getElementById('logo');
    const body = document.body;

    let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    function applyTheme(theme){
        if (theme === 'dark') {
            body.classList.add('dark');
            body.classList.remove('light');
            themeToggleButton.src = lightThemeIcon;
            logo.src = './imagens/Logo2.png';
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
            themeToggleButton.src = darkThemeIcon;
            logo.src = './imagens/Logo1.png';
        }

        localStorage.setItem('theme', theme);
    }

    applyTheme(currentTheme)

    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        applyTheme(storedTheme)
    }

        themeToggleButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (body.classList.contains('dark')) {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    })
})