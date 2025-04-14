document.querySelectorAll('.circle').forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.toggle('flipped');
  });
});
