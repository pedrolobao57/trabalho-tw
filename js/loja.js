let cart = [];

function addToCart(productName, productPrice) {
    let product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    updateCart();
}


function updateCart() {
    const cartItemsContainer = document.getElementById("Items");
    const totalPriceElement = document.getElementById("totalPrice");

    cartItemsContainer.innerHTML = "";


    let total = 0;
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;


        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeFromCart(index);
        };
        listItem.appendChild(removeButton);

        cartItemsContainer.appendChild(listItem);

        total += item.price;
    });

    
    totalPriceElement.textContent =`Total: $${total}`;
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


function clearCart() {
    cart = [];
    updateCart();
}


