document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('hamburger');
  const nav = document.querySelector('.main-nav');
  btn.addEventListener('click', function(){
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.right = '16px';
      nav.style.background = 'rgba(11,26,51,0.95)';
      nav.style.padding = '10px';
      nav.style.borderRadius = '8px';
    }
  });
});