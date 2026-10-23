const toggleHeaderDiv = document.querySelector('#toggle_header');
if (toggleHeaderDiv) {
  toggleHeaderDiv.addEventListener('click', () => {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('red');
      header.classList.toggle('green');
    }
  });
}
