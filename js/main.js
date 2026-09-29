/**
 * @description General UI behavior
 *
 * @author Victor Castro
 *
 * @version 1.0 09/28/2026
 * @since   1.0 09/28/2026
 */

(function () {
    // Cerrar el menú móvil al elegir una sección
    const menu = document.getElementById('navbar-menu');
    const toggler = document.querySelector('.navbar-toggler');

    menu?.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('show')) toggler?.click();
        });
    });
})();
