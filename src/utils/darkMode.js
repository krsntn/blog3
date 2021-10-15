// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export function updateWebsiteDarkMode() {
  if (typeof window === 'undefined') return;

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function toggleDarkMode() {
  if (typeof window === 'undefined') return;

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    localStorage.theme = 'light';
  } else {
    localStorage.theme = 'dark';
  }
}
// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme');

export function isDarkMode() {
  return (
    typeof window !== 'undefined' &&
    (localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches))
  );
}
