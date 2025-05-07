
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // cegah pengiriman form normal

    const productSelect = document.getElementById("product");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const product = selectedOption.value;
    const price = parseInt(selectedOption.dataset.price);
    const quantity = parseInt(document.getElementById("quantity").value);

    const cartItem = {
      product,
      price,
      quantity,
      total: price * quantity
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Arahkan ke halaman keranjang
    window.location.href = "keranjang.html";
  });

