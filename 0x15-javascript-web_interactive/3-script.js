const redHeaderDiv = document.querySelector('#red_header');
if (redHeaderDiv) {
  redHeaderDiv.addEventListener('click', () => {
    const header = document.querySelector('header');
    if (header) {
      header.classList.add('red');
    }
  });
}
