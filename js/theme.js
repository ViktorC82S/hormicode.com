/**
 * @description Theme Handler
 *
 * Loaded in <head> (not deferred) so the theme is applied before the first paint.
 * Uses the saved choice, or the OS preference if the user never chose one.
 * Toggle visibility is handled by Tabler's .hide-theme-dark / .hide-theme-light classes.
 *
 * @author Victor Castro
 *
 * @version 1.1 09/28/2026
 * @since   1.0 01/12/2026
 */

(function () {
    const STORAGE_KEY = 'hormicode-theme';
    const root = document.documentElement;

    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function setTheme(theme, persist) {
        root.setAttribute('data-bs-theme', theme);
        if (persist) {
            try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* storage unavailable */ }
        }
    }

    // Restaurar tema guardado o usar el del sistema
    const saved = getSavedTheme();
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(saved === 'light' || saved === 'dark' ? saved : systemTheme, false);

    // Eventos (delegados: los botones aún no existen cuando corre este script)
    document.addEventListener('click', e => {
        const btn = e.target.closest('[data-theme-set]');
        if (!btn) return;
        e.preventDefault();
        setTheme(btn.dataset.themeSet, true);
    });
})();
