
const btn= document.querySelectorAll(".AddButton")

btn.forEach(button=> {
    button.addEventListener('click', () => {
        alert("ADICIONADO AO CARRINHO");
    });
});

