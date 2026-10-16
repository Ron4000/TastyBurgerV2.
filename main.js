const burgers = [
  {
    id: "classic-beef",
    name: "Classic Beef",
    category: "Beef",
    description: "Two smashed beef patties, melty American cheese, crisp lettuce, pickles, and our house sauce on a toasted potato bun.",
    price: 12.5,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "smash-hit",
    name: "The Smash Hit",
    category: "Beef",
    description: "A crispy-edged double smash, sharp cheddar, caramelized onions, tangy pickles, and a swipe of comeback sauce.",
    price: 13.5,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "green-chile",
    name: "Green Chile Melt",
    category: "Beef",
    description: "Juicy Angus beef, roasted green chiles, pepper jack, shredded lettuce, and smoky chipotle mayo.",
    price: 14,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "big-harold",
    name: "Big Harold",
    category: "Beef",
    description: "Our signature tower: two flame-grilled patties, double cheddar, tomato, lettuce, pickles, and all the house sauce.",
    price: 16,
    rating: 5,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "crispy-chicken",
    name: "Crispy Chicken",
    category: "Chicken",
    description: "Buttermilk-brined chicken with a crunchy golden coat, cool slaw, dill pickles, and honey mustard.",
    price: 12,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "hot-honey-chicken",
    name: "Hot Honey Clucker",
    category: "Chicken",
    description: "Crispy chicken glazed with sticky hot honey, peppery greens, pickles, and a cooling ranch schmear.",
    price: 13,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "grilled-chicken",
    name: "The Backyard Bird",
    category: "Chicken",
    description: "Herb-grilled chicken breast, ripe tomato, buttery lettuce, avocado, and lemon-garlic mayo.",
    price: 13.5,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "ultimate-bacon",
    name: "Ultimate Bacon",
    category: "Bacon",
    description: "Smoky bacon piled over a juicy beef patty with sharp cheddar, crispy onions, and maple pepper jam.",
    price: 15,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "bbq-bacon",
    name: "BBQ Bacon Jam",
    category: "Bacon",
    description: "Beef, thick-cut bacon, smoky barbecue sauce, Monterey Jack, and a generous spoonful of bacon jam.",
    price: 15.5,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "garden-party",
    name: "Garden Party",
    category: "Vegan",
    description: "A hearty black bean and quinoa patty with avocado, crunchy sprouts, tomato, and creamy vegan herb sauce.",
    price: 12.5,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "mushroom-plant",
    name: "Mushroom Mood",
    category: "Vegan",
    description: "A savory plant-based patty with garlicky mushrooms, vegan smoked gouda, arugula, and truffle-style aioli.",
    price: 13.5,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "double-trouble",
    name: "Double Trouble",
    category: "Specials",
    description: "Two beef patties, two cheeses, crispy jalapeños, smoky ranch, and a sweet-heat sauce that means business.",
    price: 16.5,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "blue-cheese",
    name: "Blue Moon",
    category: "Specials",
    description: "A juicy beef patty with tangy blue cheese, pear-onion jam, baby arugula, and a toasted brioche bun.",
    price: 15,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "breakfast-club",
    name: "Breakfast Club",
    category: "Specials",
    description: "Beef, a sunny fried egg, melty cheddar, hash brown crunch, and a little hit of smoky breakfast sauce.",
    price: 15.5,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "hot-mess",
    name: "The Hot Mess",
    category: "Specials",
    description: "Our monthly mash-up: beef, queso, crunchy tortilla strips, pico de gallo, and jalapeño crema.",
    price: 16,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  },
];

const categoryButtons = [...document.querySelectorAll(".category-button")];
const menuGrid = document.querySelector("#menu-grid");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector(".result-count");
const searchInput = document.querySelector("#burger-search");
const searchClear = document.querySelector(".search-clear");
const cartBadge = document.querySelector(".cart-badge");
const drawerLayer = document.querySelector("#drawer-layer");
const cartDrawer = document.querySelector("#cart-drawer");
const cartItemsElement = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartTotalElement = document.querySelector("#cart-total");
const drawerCount = document.querySelector(".drawer-count");
const checkoutButton = document.querySelector(".checkout-button");
const productDialog = document.querySelector("#product-dialog");
const productDialogContent = document.querySelector("#product-dialog-content");
const promoDialog = document.querySelector("#promo-dialog");
const toastRegion = document.querySelector("#toast-region");

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const burgerIds = new Set(burgers.map(({ id }) => id));
const readStoredValue = (key, fallback) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from localStorage.`, error);
    return fallback;
  }
};
const writeStoredValue = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Unable to save ${key} to localStorage.`, error);
  }
};

const storedCart = readStoredValue("harolds-cart", {});
let cart = storedCart && typeof storedCart === "object" && !Array.isArray(storedCart)
  ? Object.fromEntries(
    Object.entries(storedCart).filter(([id, quantity]) => burgerIds.has(id) && Number.isInteger(quantity) && quantity > 0),
  )
  : {};
const storedFavorites = readStoredValue("harolds-favorites", []);
let favorites = new Set(
  Array.isArray(storedFavorites) ? storedFavorites.filter((id) => burgerIds.has(id)) : [],
);
let activeCategory = "All";
let selectedBurger = null;
let productQuantity = 1;
let lastFocusedElement = null;
let drawerReturnFocus = null;
let filterTimer = 0;
let previousCartCount = 0;
let cardObserver = null;

const heartIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.8 8.8c0 4.2-8.8 10-8.8 10s-8.8-5.8-8.8-10a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z"></path>
  </svg>`;

const itemCount = () => Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
const getBurger = (id) => burgers.find((burger) => burger.id === id);

const cardTemplate = (burger) => {
  const { id, name, category, description, price, rating, image } = burger;
  const quantity = cart[id] ?? 0;
  const isFavorite = favorites.has(id);
  return `
    <article class="burger-card" data-burger-id="${id}">
      <button class="card-image-button" type="button" data-action="open-product" data-id="${id}" aria-label="View ${name} details">
        <img src="${image}" alt="${name} burger" loading="lazy" />
        <span class="card-image-prompt" aria-hidden="true">Take a closer look ↗</span>
      </button>
      <span class="card-label">${category === "Specials" ? "HAROLD'S PICK" : category.toUpperCase()}</span>
      <button
        class="favorite-button${isFavorite ? " is-favorite" : ""}"
        type="button"
        data-action="toggle-favorite"
        data-id="${id}"
        aria-label="${isFavorite ? "Remove" : "Add"} ${name} ${isFavorite ? "from" : "to"} favorites"
        aria-pressed="${isFavorite}"
      >${heartIcon}</button>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${category}</span>
          <span class="card-rating" aria-label="${rating} out of 5 stars">★ <span>${rating.toFixed(1)}</span></span>
        </div>
        <h3 class="card-name">${name}</h3>
        <p class="card-description">${description}</p>
        <div class="card-bottom">
          <span class="card-price">${currency.format(price)}</span>
          <div class="stepper" aria-label="${name} quantity">
            <button type="button" data-action="decrease-cart" data-id="${id}" aria-label="Remove one ${name}" ${quantity === 0 ? "disabled" : ""}>−</button>
            <output aria-label="In cart">${quantity}</output>
            <button type="button" data-action="increase-cart" data-id="${id}" aria-label="Add one ${name} to cart">+</button>
          </div>
        </div>
      </div>
    </article>`;
};

const matchingBurgers = () => {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();
  return burgers.filter(({ category, name, description }) => {
    const categoryMatches = activeCategory === "All" || category === activeCategory;
    const searchMatches = !searchTerm
      || name.toLocaleLowerCase().includes(searchTerm)
      || description.toLocaleLowerCase().includes(searchTerm);
    return categoryMatches && searchMatches;
  });
};

const watchCards = () => {
  cardObserver?.disconnect();
  if (!("IntersectionObserver" in window)) {
    menuGrid.querySelectorAll(".burger-card").forEach((card) => card.classList.add("is-visible"));
    return;
  }

  cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px 60px 0px", threshold: 0.08 });
  menuGrid.querySelectorAll(".burger-card").forEach((card) => cardObserver.observe(card));
};

const renderMenu = () => {
  const filteredBurgers = matchingBurgers();
  menuGrid.setAttribute("aria-busy", "false");
  menuGrid.innerHTML = filteredBurgers.map(cardTemplate).join("");
  emptyState.hidden = filteredBurgers.length > 0;
  resultCount.textContent = `${filteredBurgers.length} ${filteredBurgers.length === 1 ? "burger" : "burgers"} to make your day`;
  watchCards();
};

const scheduleMenuRender = () => {
  window.clearTimeout(filterTimer);
  menuGrid.classList.add("is-filtering");
  menuGrid.setAttribute("aria-busy", "true");
  filterTimer = window.setTimeout(() => {
    renderMenu();
    requestAnimationFrame(() => menuGrid.classList.remove("is-filtering"));
  }, 110);
};

const renderCart = (animateBadge = false) => {
  const totalItems = itemCount();
  cartBadge.textContent = String(totalItems);
  cartBadge.setAttribute("aria-label", `${totalItems} items in cart`);
  document.querySelector(".cart-trigger").setAttribute("aria-label", `Open shopping cart, ${totalItems} ${totalItems === 1 ? "item" : "items"}`);
  drawerCount.textContent = totalItems ? `(${totalItems})` : "";
  cartTotalElement.textContent = currency.format(
    Object.entries(cart).reduce((total, [id, quantity]) => total + (getBurger(id)?.price ?? 0) * quantity, 0),
  );
  cartItemsElement.innerHTML = Object.entries(cart)
    .map(([id, quantity]) => {
      const burger = getBurger(id);
      if (!burger) return "";
      const { name, image, price } = burger;
      return `
        <article class="cart-line" data-burger-id="${id}">
          <img src="${image}" alt="" loading="lazy" />
          <div class="cart-line-info">
            <h3>${name}</h3>
            <p>${currency.format(price)} each</p>
            <div class="stepper" aria-label="${name} quantity">
              <button type="button" data-action="decrease-cart" data-id="${id}" aria-label="Remove one ${name}">−</button>
              <output aria-label="Quantity">${quantity}</output>
              <button type="button" data-action="increase-cart" data-id="${id}" aria-label="Add one ${name}">+</button>
            </div>
          </div>
          <div class="cart-line-total">
            <span>${currency.format(price * quantity)}</span>
            <button class="remove-item" type="button" data-action="remove-cart-item" data-id="${id}" aria-label="Remove ${name} from cart">Remove</button>
          </div>
        </article>`;
    })
    .join("");
  const isEmpty = totalItems === 0;
  cartEmpty.hidden = !isEmpty;
  cartItemsElement.hidden = isEmpty;
  checkoutButton.disabled = isEmpty;

  if (animateBadge && totalItems !== previousCartCount) {
    cartBadge.classList.remove("is-popping");
    void cartBadge.offsetWidth;
    cartBadge.classList.add("is-popping");
  }
  previousCartCount = totalItems;
};

const showToast = (message) => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `<span class="toast-icon" aria-hidden="true">🍔</span><span>${message}</span>`;
  toastRegion.append(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.classList.add("is-leaving");
    window.setTimeout(() => toast.remove(), 300);
  }, 2500);
};

const addToCart = (id, quantity = 1) => {
  const burger = getBurger(id);
  if (!burger || quantity < 1) return;
  cart = { ...cart, [id]: (cart[id] ?? 0) + quantity };
  writeStoredValue("harolds-cart", cart);
  renderCart(true);
  renderMenu();
  showToast(`${burger.name} added to cart`);
};

const changeCartQuantity = (id, change) => {
  const nextQuantity = (cart[id] ?? 0) + change;
  if (nextQuantity > 0) {
    cart = { ...cart, [id]: nextQuantity };
  } else {
    const { [id]: removed, ...remainingCart } = cart;
    cart = remainingCart;
  }
  writeStoredValue("harolds-cart", cart);
  renderCart(true);
  renderMenu();
};

const removeCartItem = (id) => {
  const { [id]: removed, ...remainingCart } = cart;
  cart = remainingCart;
  writeStoredValue("harolds-cart", cart);
  renderCart(true);
  renderMenu();
};

const setFavorite = (id) => {
  if (!burgerIds.has(id)) return;
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  writeStoredValue("harolds-favorites", [...favorites]);
  const card = menuGrid.querySelector(`[data-burger-id="${id}"]`);
  const button = card?.querySelector(".favorite-button");
  if (!button) return;
  const isFavorite = favorites.has(id);
  button.classList.toggle("is-favorite", isFavorite);
  button.setAttribute("aria-pressed", String(isFavorite));
  button.setAttribute("aria-label", `${isFavorite ? "Remove" : "Add"} ${getBurger(id).name} ${isFavorite ? "from" : "to"} favorites`);
};

const renderProductDialog = () => {
  if (!selectedBurger) return;
  const { id, name, category, description, price, rating, image } = selectedBurger;
  productDialogContent.innerHTML = `
    <img class="product-dialog-image" src="${image}" alt="${name} burger" />
    <div class="product-dialog-copy">
      <p class="eyebrow"><span class="eyebrow-dot"></span> ${category.toUpperCase()} FAVORITE</p>
      <h2 id="product-dialog-title">${name}</h2>
      <p class="product-rating">★ ${rating.toFixed(1)} <span>/ 5 · grill-approved</span></p>
      <p class="product-description">${description}</p>
      <div class="product-buy-row">
        <span class="product-price">${currency.format(price)}</span>
        <div class="stepper" aria-label="Choose quantity">
          <button type="button" data-action="product-quantity" data-change="-1" aria-label="Decrease quantity" ${productQuantity <= 1 ? "disabled" : ""}>−</button>
          <output aria-label="Quantity">${productQuantity}</output>
          <button type="button" data-action="product-quantity" data-change="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="button button-primary" type="button" data-action="add-product" data-id="${id}">Add to cart · ${currency.format(price * productQuantity)}</button>
    </div>`;
};

const openProduct = (id, trigger) => {
  selectedBurger = getBurger(id);
  if (!selectedBurger) return;
  lastFocusedElement = trigger;
  productQuantity = 1;
  renderProductDialog();
  productDialog.showModal();
  document.body.classList.add("is-locked");
};

const restoreFocusAfterDialog = (dialog) => {
  if (!productDialog.open && !promoDialog.open && !drawerLayer.classList.contains("is-open")) {
    document.body.classList.remove("is-locked");
  }
  if (dialog === productDialog && lastFocusedElement?.isConnected) lastFocusedElement.focus();
  if (dialog === promoDialog && lastFocusedElement?.isConnected) lastFocusedElement.focus();
};

const closeProduct = () => {
  if (productDialog.open) productDialog.close();
};

const openPromo = (trigger) => {
  lastFocusedElement = trigger;
  promoDialog.showModal();
};

const closePromo = () => {
  if (promoDialog.open) promoDialog.close();
};

const openCart = (trigger) => {
  drawerReturnFocus = trigger;
  drawerLayer.hidden = false;
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  requestAnimationFrame(() => {
    drawerLayer.classList.add("is-open");
    cartDrawer.querySelector(".drawer-close").focus();
  });
};

const closeCart = () => {
  if (drawerLayer.hidden) return;
  drawerLayer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    if (drawerLayer.classList.contains("is-open")) return;
    drawerLayer.hidden = true;
    if (!productDialog.open && !promoDialog.open) document.body.classList.remove("is-locked");
    if (drawerReturnFocus?.isConnected) drawerReturnFocus.focus();
  }, 270);
};

const closeOnBackdrop = (event, dialog, close) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  const inside = event.clientX >= bounds.left
    && event.clientX <= bounds.right
    && event.clientY >= bounds.top
    && event.clientY <= bounds.bottom;
  if (!inside) close();
};

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const actionButton = target?.closest("[data-action]");
  if (!actionButton) return;
  const { action, id } = actionButton.dataset;

  switch (action) {
    case "open-promo":
      openPromo(actionButton);
      break;
    case "open-cart":
      openCart(actionButton);
      break;
    case "close-cart":
      closeCart();
      break;
    case "open-product":
      openProduct(id, actionButton);
      break;
    case "close-product":
      closeProduct();
      break;
    case "close-promo":
      closePromo();
      break;
    case "increase-cart":
      addToCart(id);
      break;
    case "decrease-cart":
      changeCartQuantity(id, -1);
      break;
    case "remove-cart-item":
      removeCartItem(id);
      break;
    case "toggle-favorite":
      setFavorite(id);
      break;
    case "product-quantity": {
      productQuantity = Math.max(1, productQuantity + Number(actionButton.dataset.change));
      renderProductDialog();
      productDialogContent.querySelector(`[data-action="product-quantity"][data-change="${actionButton.dataset.change}"]`).focus();
      break;
    }
    case "add-product":
      addToCart(id, productQuantity);
      closeProduct();
      break;
    case "clear-search":
      searchInput.value = "";
      searchClear.hidden = true;
      scheduleMenuRender();
      searchInput.focus();
      break;
    case "reset-filters":
      activeCategory = "All";
      searchInput.value = "";
      searchClear.hidden = true;
      categoryButtons.forEach((button) => {
        const isActive = button.dataset.category === "All";
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      scheduleMenuRender();
      break;
    case "shop-promo":
      closePromo();
      document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
      break;
    case "checkout":
      if (itemCount() > 0) {
        showToast("Checkout is coming soon — your burgers are saved!");
        closeCart();
      }
      break;
    default:
      break;
  }
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((categoryButton) => {
      const isActive = categoryButton === button;
      categoryButton.classList.toggle("is-active", isActive);
      categoryButton.setAttribute("aria-pressed", String(isActive));
    });
    scheduleMenuRender();
  });
});

searchInput.addEventListener("input", () => {
  searchClear.hidden = searchInput.value.length === 0;
  scheduleMenuRender();
});

document.querySelector(".search-form").addEventListener("submit", (event) => event.preventDefault());
drawerLayer.addEventListener("click", (event) => {
  if (event.target === drawerLayer) closeCart();
});
productDialog.addEventListener("click", (event) => closeOnBackdrop(event, productDialog, closeProduct));
promoDialog.addEventListener("click", (event) => closeOnBackdrop(event, promoDialog, closePromo));
productDialog.addEventListener("close", () => restoreFocusAfterDialog(productDialog));
promoDialog.addEventListener("close", () => restoreFocusAfterDialog(promoDialog));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !drawerLayer.hidden && drawerLayer.classList.contains("is-open")) {
    closeCart();
  }
  if (event.key !== "Tab" || drawerLayer.hidden || !drawerLayer.classList.contains("is-open")) return;
  const focusableElements = [...cartDrawer.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), [tabindex="0"]')]
    .filter((element) => !element.hidden);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

renderCart();
renderMenu();
