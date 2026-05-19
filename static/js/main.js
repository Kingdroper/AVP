// AVP project page interactions

// Reveal on scroll
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  items.forEach((el) => io.observe(el));
})();

// BibTeX copy
function copyBibtex(btn) {
  const text = document.getElementById('bibtex-block').innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const old = btn.innerText;
      btn.innerText = 'Copied ✓';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerText = old;
        btn.classList.remove('copied');
      }, 1800);
    })
    .catch(() => {
      btn.innerText = 'Copy failed';
    });
}
