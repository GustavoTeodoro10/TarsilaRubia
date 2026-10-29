window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        tc: {
          dark:        '#0C0B09',
          'dark-2':    '#121110',
          'dark-3':    '#1A1916',
          gold:        '#C8974A',
          'gold-lt':   '#E8C07A',
          'gold-dim':  'rgba(200,151,74,0.12)',
          cream:       '#F4EEE4',
          muted:       '#8A8480',
          border:      '#252320',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
};
