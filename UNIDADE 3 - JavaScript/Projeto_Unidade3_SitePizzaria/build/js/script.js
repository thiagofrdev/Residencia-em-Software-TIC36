"use strict";
const cartItems = [];
// Função para adicionar uma pizza ao carrinho
function addToCart(imageSrc, title, price) {
    const existingItem = cartItems.find(item => item.title === title);
    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        const newPizza = {
            imageSrc,
            title,
            price,
            quantity: 1
        };
        cartItems.push(newPizza);
    }
    renderCartItems();
}
// Função para renderizar os itens do carrinho
function renderCartItems() {
    const cartContainer = document.querySelector('.main-display-cart');
    cartContainer.innerHTML = ''; // Limpa o conteúdo do carrinho antes de renderizar novamente
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.imageSrc}" class="cart-item-image">
            <p class="cart-item-title">${item.title}</p>
            <input type="number" class="cart-item-quantity" value="${item.quantity}" min="1">
            <p class="cart-item-total-price">Total: R$${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItemElement);
        // Adiciona um evento para alterar a quantidade do item
        const quantityInput = cartItemElement.querySelector('.cart-item-quantity');
        quantityInput.addEventListener('change', () => {
            item.quantity = parseInt(quantityInput.value);
            renderCartItems();
        });
    });
}
// Captura o evento de clique nos botões de adicionar ao carrinho
document.querySelectorAll('.btn-add-cart').forEach((button) => {
    button.addEventListener('click', () => {
        var _a;
        const pizzaCard = button.closest('.pizza-card');
        const imageSrc = pizzaCard.querySelector('.pizza-image').src;
        const title = pizzaCard.querySelector('.pizza-title').textContent || '';
        const price = parseFloat(((_a = pizzaCard.querySelector('.price').textContent) === null || _a === void 0 ? void 0 : _a.replace('R$', '')) || '0');
        addToCart(imageSrc, title, price);
    });
});
