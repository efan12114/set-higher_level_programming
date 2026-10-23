document.addEventListener('DOMContentLoaded', () => {
  const btnTranslate = document.querySelector('#btn_translate');
  btnTranslate.addEventListener('click', async () => {
    const langCode = document.querySelector('#language_code').value;
    const helloDiv = document.querySelector('#hello');
    if (!langCode) return;
    try {
      const response = await fetch(`https://hellosalut.stefanbohacek.dev/?lang=${langCode}`);
      if (!response.ok) {
        throw new Error('Failed to fetch translation');
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error loading translation.';
    }
  });
});
