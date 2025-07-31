const toggleBtn = document.getElementById('themeToggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

// Load saved theme
if (localStorage.theme === 'light') {
  document.documentElement.classList.remove('dark');
  iconMoon.classList.remove('hidden');
  iconSun.classList.add('hidden');
} else {
  document.documentElement.classList.add('dark');
  iconMoon.classList.add('hidden');
  iconSun.classList.remove('hidden');
}

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.theme = isDark ? 'dark' : 'light';
  iconMoon.classList.toggle('hidden', isDark);
  iconSun.classList.toggle('hidden', !isDark);
});
