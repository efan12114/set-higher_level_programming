const addItemDiv = document.querySelector('#add_item');
if (addItemDiv) {
  addItemDiv.addEventListener('click', () => {
    const ul = document.querySelector('ul.my_list');
    if (ul) {
      const li = document.createElement('li');
      li.textContent = 'Item';
      ul.appendChild(li);
    }
  });
}
