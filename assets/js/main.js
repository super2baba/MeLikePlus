(() => {
  const button = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-global-nav]');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
})();
