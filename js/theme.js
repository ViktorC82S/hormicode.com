/**
 * @description Theme Handler (light / dark)
 *
 * Loaded in <head> (not deferred) so the theme is applied before the first paint.
 * Toggles the .dark class on <html>. Default: dark.
 * Sun/moon icon visibility is handled in CSS.
 *
 * @author Victor Castro
 *
 * @version 2.0 09/28/2026
 * @since   1.0 01/12/2026
 */

(function () {
    const STORAGE_KEY = 'hormicode-theme';
    const DEFAULT_THEME = 'dark';
    const root = document.documentElement;

    function applyTheme(theme, persist) {
        root.classList.toggle('dark', theme === 'dark');
        if (persist) {
            try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* storage unavailable */ }
        }
    }

    // Restaurar tema guardado
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
    applyTheme(saved === 'light' || saved === 'dark' ? saved : DEFAULT_THEME, false);

    // Evento (delegado: el botón aún no existe cuando corre este script)
    document.addEventListener('click', e => {
        if (!e.target.closest('#themeToggle')) return;
        applyTheme(root.classList.contains('dark') ? 'light' : 'dark', true);
    });
})();
