'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return visible ? (
    <button
      onClick={scroll}
      className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition"
    >
      ↑ Top
    </button>
  ) : null;
}
