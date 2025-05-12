document.getElementById('menu-toggle')?.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('hidden');
  }
});