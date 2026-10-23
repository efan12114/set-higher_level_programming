const redHeaderDiv = document.querySelector('#red_header');
if (redHeaderDiv) {
  redHeaderDiv.addEventListener('click', () => {
    const header = document.querySelector('header');
    if (header) {
      header.style.color = '#FF0000';
    }
  });
}
