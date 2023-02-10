(function setGlowEffectRx() {
  const glowEffects = document.querySelectorAll('.glow-effect');

  glowEffects.forEach((glowEffect) => {
    const glowLines = glowEffect.querySelectorAll('rect');
    const rx = getComputedStyle(glowEffect).borderRadius;

    glowLines.forEach((line) => {
      line.setAttribute('rx', rx);
    });
  });
})();

(function setGlowColor() {
  const glowEffects = document.querySelectorAll('.glow-effect');
  //   console.log(glowEffects.getAttribute('data-glow-color'));

  glowEffects.forEach((el) => {
    // console.log(el.getAttribute('data-glow-color'));
    let color = el.getAttribute('data-glow-color');
    if (color != null && color != false) {
      el.style.backgroundColor = '#fff5';
      el.style.color = '#fff';
      el.style.setProperty('--glow-line-color', color);
      el.style.setProperty('--glow-blur-color', color);
    }
  });
})();
