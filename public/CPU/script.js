// ============================================
// Lernzettel – Prozessortechnik & CPU-Architektur
// Interactive learning website logic
// ============================================

(function () {
  'use strict';

  // ---------- Theme Toggle ----------
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('lernzettel-theme', theme);
  }

  // Init theme from localStorage or system preference
  (function initTheme() {
    const stored = localStorage.getItem('lernzettel-theme');
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  })();

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ---------- Tab Switching ----------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function switchTab(tabId) {
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === tabId);
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // ---------- Card Reveal ----------
  document.querySelectorAll('.card-question').forEach(question => {
    question.addEventListener('click', () => {
      const card = question.closest('.card');
      card.classList.toggle('open');
    });
  });

  // ---------- Toggle All Cards ----------
  document.querySelectorAll('.btn-toggle-all').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.tab-panel');
      const cards = panel.querySelectorAll('.card');
      const allOpen = [...cards].every(c => c.classList.contains('open'));

      cards.forEach(card => {
        if (allOpen) {
          card.classList.remove('open');
        } else {
          card.classList.add('open');
        }
      });

      updateToggleBtnText(btn, !allOpen);
    });
  });

  function updateToggleBtnText(btn, allOpen) {
    const icon = btn.querySelector('.btn-icon');
    const text = btn.querySelector('.btn-text');
    if (allOpen) {
      icon.textContent = '▲';
      text.textContent = 'Alle zuklappen';
    } else {
      icon.textContent = '▼';
      text.textContent = 'Alle aufklappen';
    }
  }
})();
