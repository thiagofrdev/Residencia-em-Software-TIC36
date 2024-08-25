interface Pizza {
    imageSrc: string;
    title: string;
    price: number;
    quantity: number;
}

const cartItems: Pizza[] = [];

// Função para adicionar uma pizza ao carrinho
function addToCart(imageSrc: string, title: string, price: number): void {
    const existingItem = cartItems.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        const newPizza: Pizza = {
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
function renderCartItems(): void {
    const cartContainer = document.querySelector('.main-display-cart') as HTMLElement;
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
        const quantityInput = cartItemElement.querySelector('.cart-item-quantity') as HTMLInputElement;
        quantityInput.addEventListener('change', () => {
            item.quantity = parseInt(quantityInput.value);
            renderCartItems();
        });
    });
}

// Captura o evento de clique nos botões de adicionar ao carrinho
document.querySelectorAll('.btn-add-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const pizzaCard = button.closest('.pizza-card') as HTMLElement;
        const imageSrc = (pizzaCard.querySelector('.pizza-image') as HTMLImageElement).src;
        const title = (pizzaCard.querySelector('.pizza-title') as HTMLElement).textContent || '';
        const price = parseFloat((pizzaCard.querySelector('.price') as HTMLElement).textContent?.replace('R$', '') || '0');

        addToCart(imageSrc, title, price);
    });
});