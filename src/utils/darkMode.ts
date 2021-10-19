// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export function updateWebsiteDarkMode(isDarkMode: boolean): void {
  if (typeof window === 'undefined') return;

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
