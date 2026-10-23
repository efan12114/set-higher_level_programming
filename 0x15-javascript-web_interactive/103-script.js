document.addEventListener('DOMContentLoaded', () => {
  const btnTranslate = document.querySelector('#btn_translate');
  const inputLang = document.querySelector('#language_code');
  const helloDiv = document.querySelector('#hello');
  const fetchTranslation = async () => {
    const langCode = inputLang.value;
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
  };
  btnTranslate.addEventListener('click', fetchTranslation);
  inputLang.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      fetchTranslation();
    }
  });
});
