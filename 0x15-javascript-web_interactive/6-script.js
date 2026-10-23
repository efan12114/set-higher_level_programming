const updateHeaderDiv = document.querySelector('#update_header');
if (updateHeaderDiv) {
  updateHeaderDiv.addEventListener('click', () => {
    const header = document.querySelector('header');
    if (header) {
      header.textContent = 'New Header!!!';
    }
  });
}
