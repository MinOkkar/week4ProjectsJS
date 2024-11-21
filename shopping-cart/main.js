let cartItems = [];
let discount = 0;

function addItem() {
  const itemName = document.getElementById("itemName").value;
  const price = parseFloat(document.getElementById("price").value);
  const amount = parseInt(document.getElementById("amount").value, 10);

  if (!itemName || isNaN(price) || isNaN(amount) || price <= 0 || amount <= 0) {
    alert("Please fill in valid item details.");
    return;
  }

  const item = {
    name: itemName,
    price: price,
    amount: amount,
    total: price * amount,
  };

  cartItems.push(item);

  document.getElementById("itemName").value = "";
  document.getElementById("price").value = "";
  document.getElementById("amount").value = "1";

  displayCart();
}

function displayCart() {
  const itemsList = document.getElementById("items-list");
  itemsList.innerHTML = "";

  let cartTotal = 0;

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `${item.name} - $${item.price} x ${item.amount}`;
    itemsList.appendChild(itemDiv);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeTask(index);
    itemDiv.appendChild(removeButton);

    cartTotal += item.total;
  });

  if (discount > 0) {
    cartTotal = cartTotal - (cartTotal * discount) / 100;
  }

  document.getElementById("total").innerText = `Total: $${cartTotal.toFixed(
    2
  )}`;
}

function aplyDis() {
  const discoutValue = parseFloat(document.getElementById("discout").value);

  if (isNaN(discoutValue) || discoutValue < 0 || discoutValue > 100) {
    alert("Please enter a valid discount percentage between 0 and 100.");
    return;
  }

  discount = discoutValue;

  document.getElementById("discout").value = "";

  displayCart();
}

function removeTask(index) {
  cartItems.splice(index, 1);

  displayCart();
}
