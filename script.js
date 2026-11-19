// Pequenas interações do site
const topButton = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topButton.style.display = window.scrollY > 450 ? 'block' : 'none';
});
topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fecha o menu mobile depois de escolher uma seção.
document.querySelectorAll('.navbar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
