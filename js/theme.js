/**
 * @description Theme Handler
 * 
 * @author Victor Castro
 * 
 * @version 1.0 01/12/2026
 * @since   1.0 01/12/2026
 */


(function () {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const STORAGE_KEY = 'hormicode-theme';
    const root = document.documentElement;

    function setTheme(theme) {
        root.setAttribute('data-bs-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateVisibility(theme);
    }

    function updateVisibility(theme) {
        document.querySelectorAll('.hide-theme-dark')
            .forEach(el => el.style.display = theme === 'dark' ? 'none' : 'inline-flex');

        document.querySelectorAll('.hide-theme-light')
            .forEach(el => el.style.display = theme === 'light' ? 'none' : 'inline-flex');
    }

    // Restaurar tema guardado
    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
    setTheme(savedTheme);

    // Eventos
    document.getElementById('btn-dark')?.addEventListener('click', e => {
        e.preventDefault();
        setTheme('dark');
    });

    document.getElementById('btn-light')?.addEventListener('click', e => {
        e.preventDefault();
        setTheme('light');
    });
})();