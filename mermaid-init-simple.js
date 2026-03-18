// Simple Mermaid initialization
(function() {
  function initMermaid() {
    if (typeof mermaid === 'undefined') {
      setTimeout(initMermaid, 100);
      return;
    }

    // Initialize mermaid with theme detection
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    
    mermaid.initialize({
      startOnLoad: true,
      theme: isDarkMode ? 'dark' : 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });
  }

  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }

  // Re-initialize on theme change
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-theme'
      ) {
        initMermaid();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
})();