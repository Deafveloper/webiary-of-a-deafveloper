// Simple open/close handling for the notebook cover and inside pages
document.addEventListener('DOMContentLoaded', () => {
  const coverShell = document.querySelector('.cover-shell');
  const book = document.getElementById('book');
  const pageStrip = document.querySelector('.page-strip');
  const pages = pageStrip ? Array.from(pageStrip.querySelectorAll('.page')) : [];
  // Trigger: main CTA button
  const openTriggers = document.querySelectorAll('.cover__open-button');
  const firstHeading = book ? book.querySelector('.page-inner h1, .page-inner h2, .page-inner h3') : null;
  const prevBtn = document.querySelector('[data-page-prev]');
  const nextBtn = document.querySelector('[data-page-next]');
  let currentIndex = 0;

  // updated by AI: helper to get current page width (supports single-page viewport)
  const getPageWidth = () => {
    if (!pages.length) return 0;
    return pages[0].getBoundingClientRect().width || 0;
  };

  const setNavState = () => {
    if (!prevBtn || !nextBtn || !pages.length) return;
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= pages.length - 1;
  };

  const openBook = () => {
    if (!coverShell || !book) return;
    coverShell.classList.add('is-hidden');
    book.classList.remove('is-hidden');
    if (firstHeading) {
      firstHeading.focus({ preventScroll: false });
    }
    setNavState();
    console.info('Notebook opened');
  };

  const scrollToPage = (index) => {
    if (!pageStrip || !pages.length) return;
    const clamped = Math.max(0, Math.min(index, pages.length - 1));
    currentIndex = clamped;
    pages[clamped].scrollIntoView({ behavior: 'smooth', inline: 'start' });
    setNavState();
  };

  openTriggers.forEach((trigger) => {
    trigger.addEventListener('click', openBook);
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openBook();
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => scrollToPage(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => scrollToPage(currentIndex + 1));
  }

  if (pageStrip && pages.length) {
    let scrollRaf = null;
    pageStrip.addEventListener('scroll', () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        const width = getPageWidth();
        const idx = width ? Math.round(pageStrip.scrollLeft / width) : 0;
        if (idx !== currentIndex) {
          currentIndex = Math.max(0, Math.min(idx, pages.length - 1));
          setNavState();
        }
        scrollRaf = null;
      });
    });
  }
});
