
export const setupSmoothScrolling = () => {
  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  document.addEventListener('click', handleAnchorClick);
  
  return () => {
    document.removeEventListener('click', handleAnchorClick);
  };
};
