document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item');

  function updateTotal() {
    let total = 0;
    items.forEach(item => {
      const price = parseFloat(item.querySelector('.price').textContent);
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      total += price * quantity;
    });
    document.getElementById('total').textContent = total.toFixed(2);
  }

  items.forEach(item => {
    const plus = item.querySelector('.plus');
    const minus = item.querySelector('.minus');
    const quantityEl = item.querySelector('.quantity');
    const like = item.querySelector('.like');
    const del = item.querySelector('.delete');

    plus.addEventListener('click', () => {
      let quantity = parseInt(quantityEl.textContent);
      quantityEl.textContent = quantity + 1;
      updateTotal();
    });

    minus.addEventListener('click', () => {
      let quantity = parseInt(quantityEl.textContent);
      if (quantity > 0) {
        quantityEl.textContent = quantity - 1;
        updateTotal();
      }
    });

    like.addEventListener('click', () => {
      like.classList.toggle('liked');
    });

    del.addEventListener('click', () => {
      item.remove();
      updateTotal();
    });
  });

  updateTotal(); // initial
});
