const decreaseButton = document.getElementById('menos');
    const increaseButton = document.getElementById('mais');
    const quantityInput = document.getElementById('quantidade');

    decreaseButton.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    increaseButton.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });