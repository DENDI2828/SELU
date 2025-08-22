document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('checkBtn').addEventListener('click', () => {
  const out = document.getElementById('demoResult');
  const bal = document.getElementById('piBalance');
  // Random demo balance for fun:
  const total = (Math.random() * 1000).toFixed(2);
  const avail = (Math.random() * total).toFixed(2);
  bal.textContent = `π ${avail} / ${total}`;
  out.hidden = false;
});