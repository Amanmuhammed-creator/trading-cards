const pokemonCards = [
  { name: "Pikachu", price: 10, image: "https://via.placeholder.com/150" },
  { name: "Charizard", price: 50, image: "https://via.placeholder.com/150" }
];

const soccerCards = [
  { name: "Messi", price: 30, image: "https://via.placeholder.com/150" },
  { name: "Ronaldo", price: 40, image: "https://via.placeholder.com/150" }
];

const cart = [];

function renderCards(cards, containerId) {
  const container = document.getElementById(containerId);
  cards.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "product-card";
    cardEl.innerHTML = `
      <img src="${card.image}" alt="${card.name}" width="150">
      <h3>${card.name}</h3>
      <p>$${card.price}</p>
      <button onclick='addToCart("${card.name}", ${card.price})'>Add to Cart</button>
    `;
    container.appendChild(cardEl);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function checkout() {
  alert("Checkout feature coming soon!");
}

renderCards(pokemonCards, "pokemon-cards");
renderCards(soccerCards, "soccer-cards");
