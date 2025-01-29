let cart = [];

function addToCart(id, productName, productPrice) {
    let product = {
        name: productName,
        price: parseFloat(productPrice)
    };

    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("Items");
    const totalPriceElement = document.getElementById("Total");

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.onclick = function () {
            removeFromCart(index);
        };
        listItem.appendChild(removeButton);

        cartItemsContainer.appendChild(listItem);

        total += item.price;
    });

    totalPriceElement.textContent = `Total Price: ${total.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}
