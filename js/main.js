(function () {
  const STORAGE_KEY = 'theme';
  const toggle = document.getElementById('theme-toggle');
  const iconMoon = document.getElementById('icon-moon');
  const iconSun  = document.getElementById('icon-sun');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    iconMoon.classList.toggle('d-none', theme === 'dark');
    iconSun.classList.toggle('d-none', theme === 'light');
  }

  // sync icons on load
  const current = document.documentElement.getAttribute('data-bs-theme');
  setTheme(current);

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const theme =
      document.documentElement.getAttribute('data-bs-theme') === 'dark'
        ? 'light'
        : 'dark';

    setTheme(theme);
  });
})();


