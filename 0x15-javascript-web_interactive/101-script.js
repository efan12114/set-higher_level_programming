document.addEventListener('DOMContentLoaded', () => {
  let items = ['Item'];
  const render = () => {
    const ul = document.querySelector('ul.my_list');
    ul.innerHTML = '';
    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
  };
  document.querySelector('#add_item').addEventListener('click', () => {
    items.push('Item');
    render();
  });
  document.querySelector('#remove_item').addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });
  document.querySelector('#clear_list').addEventListener('click', () => {
    items = [];
    render();
  });
});
