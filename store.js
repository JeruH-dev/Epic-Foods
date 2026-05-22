const EpicFoodsCatalog = (() => {
    const categories = [
        {
            id: "fruit-juice",
            name: "Fruit Juice",
            image: "Images/category 1.webp",
            colorClass: "box1",
            description: "Freshly pressed fruit blends for breakfast, lunch, and quick refreshment."
        },
        {
            id: "healthy-food",
            name: "Healthy Food",
            image: "Images/category 2.webp",
            colorClass: "box2",
            description: "Balanced meals and wholesome ingredients for everyday cooking."
        },
        {
            id: "fruits",
            name: "Fruits",
            image: "Images/category 3.webp",
            colorClass: "box3",
            description: "Seasonal fruits selected for ripeness and clean handling."
        },
        {
            id: "vegetables",
            name: "Vegetables",
            image: "Images/category 4.webp",
            colorClass: "box4",
            description: "Leafy greens, roots, and cooking staples delivered fresh."
        },
        {
            id: "drinks",
            name: "Drinks",
            image: "Images/category 5.webp",
            colorClass: "box5",
            description: "Cold beverages, smoothies, and natural drink options."
        },
        {
            id: "spices",
            name: "Spices",
            image: "Images/category 6.webp",
            colorClass: "box6",
            description: "Aromatic pantry essentials for richer home cooking."
        },
        {
            id: "meat",
            name: "Meat",
            image: "Images/category 7.webp",
            colorClass: "box7",
            description: "Cleanly prepared proteins from trusted suppliers."
        },
        {
            id: "seafood",
            name: "Seafood",
            image: "Images/category 8.webp",
            colorClass: "box8",
            description: "Fresh prawns and seafood picks for fast weeknight meals."
        },
        {
            id: "dairy",
            name: "Dairy",
            image: "Images/category 9.webp",
            colorClass: "box9",
            description: "Daily fridge staples for breakfast, baking, and snacks."
        }
    ];

    const products = [
        {
            id: "tomatoes",
            name: "Fresh Tomatoes",
            category: "vegetables",
            image: "Images/tomato.webp",
            price: 4200,
            unit: "basket",
            discount: 25,
            description: "Firm red tomatoes for stews, sauces, and salads."
        },
        {
            id: "mixed-vegetables",
            name: "Mixed Vegetables",
            category: "vegetables",
            image: "Images/vegetable.webp",
            price: 3500,
            unit: "pack",
            discount: 15,
            description: "Clean assorted vegetables ready for soups and stir fry."
        },
        {
            id: "prawns",
            name: "Fresh Prawns",
            category: "seafood",
            image: "Images/prawn.webp",
            price: 9500,
            unit: "kg",
            discount: 10,
            description: "Fresh prawns for grills, rice dishes, and seafood soups."
        },
        {
            id: "broccoli",
            name: "Broccoli Crowns",
            category: "vegetables",
            image: "Images/broccoli.webp",
            price: 5200,
            unit: "bundle",
            discount: 12,
            description: "Crisp broccoli crowns packed for healthy sides."
        },
        {
            id: "pears",
            name: "Sweet Pears",
            category: "fruits",
            image: "Images/pear.webp",
            price: 4800,
            unit: "kg",
            discount: 18,
            description: "Juicy pears for snacking, smoothies, and lunch packs."
        },
        {
            id: "ginger",
            name: "Fresh Ginger",
            category: "spices",
            image: "Images/ginger.webp",
            price: 2200,
            unit: "pack",
            discount: 8,
            description: "Sharp, aromatic ginger for teas, marinades, and stews."
        },
        {
            id: "garlic",
            name: "Garlic Bulbs",
            category: "spices",
            image: "Images/garlic.webp",
            price: 1800,
            unit: "pack",
            discount: 10,
            description: "Fresh garlic bulbs for deeper flavor in everyday meals."
        },
        {
            id: "carrots",
            name: "Carrot Bunch",
            category: "vegetables",
            image: "Images/carrot.webp",
            price: 2600,
            unit: "bunch",
            discount: 12,
            description: "Crunchy carrots for salads, soups, and lunch boxes."
        },
        {
            id: "cabbage",
            name: "Green Cabbage",
            category: "vegetables",
            image: "Images/cabbage.webp",
            price: 3200,
            unit: "head",
            discount: 10,
            description: "Fresh cabbage heads for slaws, stir fry, and soups."
        },
        {
            id: "onions",
            name: "Red Onions",
            category: "vegetables",
            image: "Images/onion.webp",
            price: 3900,
            unit: "basket",
            discount: 8,
            description: "Everyday onions selected for long shelf life."
        },
        {
            id: "potatoes",
            name: "Irish Potatoes",
            category: "healthy-food",
            image: "Images/potatoe.webp",
            price: 6100,
            unit: "bag",
            discount: 14,
            description: "Clean potatoes for fries, porridge, and family meals."
        },
        {
            id: "cold-juice",
            name: "Cold Pressed Juice",
            category: "fruit-juice",
            image: "Images/category 1.webp",
            price: 2500,
            unit: "bottle",
            discount: 10,
            description: "A chilled fruit blend with no heavy additives."
        }
    ].map((product) => ({
        ...product,
        categoryLabel: categories.find((category) => category.id === product.category)?.name || "Fresh Items"
    }));

    return { categories, products };
})();

const EpicFoodsStore = (() => {
    const cartKey = "epicFoodsCart";
    const wishlistKey = "epicFoodsWishlist";

    const readStorage = (key, fallback) => {
        try {
            return JSON.parse(localStorage.getItem(key)) || fallback;
        } catch (error) {
            return fallback;
        }
    };

    const writeStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const findProduct = (id) => EpicFoodsCatalog.products.find((product) => product.id === id);

    const getCart = () => readStorage(cartKey, []);
    const saveCart = (cart) => writeStorage(cartKey, cart);
    const getWishlist = () => readStorage(wishlistKey, []);
    const saveWishlist = (wishlist) => writeStorage(wishlistKey, wishlist);

    const formatPrice = (value) => `NGN ${Number(value).toLocaleString("en-NG")}`;

    const getCartItems = () => getCart()
        .map((item) => ({ ...item, product: findProduct(item.id) }))
        .filter((item) => item.product);

    const getCartTotal = () => getCartItems()
        .reduce((total, item) => total + item.product.price * item.quantity, 0);

    const updateBadges = () => {
        const cartCount = getCart().reduce((total, item) => total + item.quantity, 0);
        const wishlistCount = getWishlist().length;

        document.querySelectorAll("[data-cart-count]").forEach((badge) => {
            badge.textContent = cartCount;
            badge.classList.toggle("is-empty", cartCount === 0);
        });

        document.querySelectorAll("[data-wishlist-count]").forEach((badge) => {
            badge.textContent = wishlistCount;
            badge.classList.toggle("is-empty", wishlistCount === 0);
        });

        document.querySelectorAll("[data-wishlist]").forEach((button) => {
            const productId = button.dataset.wishlist;
            const isActive = getWishlist().includes(productId);
            const icon = button.querySelector(".bx") || button;
            button.classList.toggle("active", isActive);
            icon.classList.toggle("bxs-heart", isActive);
            icon.classList.toggle("bx-heart", !isActive);
            button.setAttribute("aria-label", `${isActive ? "Remove" : "Add"} ${findProduct(productId)?.name || "item"} ${isActive ? "from" : "to"} wishlist`);
        });
    };

    const showToast = (message) => {
        let region = document.querySelector(".toast-region");

        if (!region) {
            region = document.createElement("div");
            region.className = "toast-region";
            region.setAttribute("aria-live", "polite");
            document.body.appendChild(region);
        }

        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        region.appendChild(toast);

        window.setTimeout(() => {
            toast.classList.add("leaving");
            window.setTimeout(() => toast.remove(), 250);
        }, 2400);
    };

    const addToCart = (productId, quantity = 1) => {
        const product = findProduct(productId);

        if (!product) {
            return;
        }

        const cart = getCart();
        const existing = cart.find((item) => item.id === productId);

        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ id: productId, quantity });
        }

        saveCart(cart);
        updateBadges();
        showToast(`${product.name} added to cart`);
    };

    const removeFromCart = (productId) => {
        const product = findProduct(productId);
        saveCart(getCart().filter((item) => item.id !== productId));
        updateBadges();
        renderCartPage();
        renderOrderPage();

        if (product) {
            showToast(`${product.name} removed from cart`);
        }
    };

    const updateQuantity = (productId, quantity) => {
        const nextQuantity = Math.max(1, Number(quantity) || 1);
        const cart = getCart().map((item) => item.id === productId ? { ...item, quantity: nextQuantity } : item);
        saveCart(cart);
        updateBadges();
        renderCartPage();
        renderOrderPage();
    };

    const toggleWishlist = (productId) => {
        const product = findProduct(productId);

        if (!product) {
            return;
        }

        const wishlist = getWishlist();
        const exists = wishlist.includes(productId);
        const nextWishlist = exists
            ? wishlist.filter((id) => id !== productId)
            : [...wishlist, productId];

        saveWishlist(nextWishlist);
        updateBadges();
        renderWishlistPage();
        showToast(`${product.name} ${exists ? "removed from" : "added to"} wishlist`);
    };

    const productCard = (product) => {
        const isWishlisted = getWishlist().includes(product.id);

        return `
            <article class="products-box" data-product-card="${product.id}">
                <a class="product-image-link" href="products.html?product=${product.id}" aria-label="View ${product.name}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-details">
                    <span>${product.categoryLabel}</span>
                    <h2><a href="products.html?product=${product.id}">${product.name}</a></h2>
                    <p>${product.description}</p>
                    <h3 class="price">${formatPrice(product.price)}<span>/${product.unit}</span></h3>
                    <button class="icon-btn cart-action" type="button" data-add-cart="${product.id}" aria-label="Add ${product.name} to cart">
                        <i class="bx bx-cart-alt"></i>
                    </button>
                    <button class="icon-btn wishlist-action ${isWishlisted ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="${isWishlisted ? "Remove" : "Add"} ${product.name} ${isWishlisted ? "from" : "to"} wishlist">
                        <i class="bx ${isWishlisted ? "bxs-heart" : "bx-heart"}"></i>
                    </button>
                    <span class="discount">-${product.discount}%</span>
                </div>
            </article>
        `;
    };

    const categoryCard = (category) => {
        const count = EpicFoodsCatalog.products.filter((product) => product.category === category.id).length;

        return `
            <a class="categories-box ${category.colorClass}" href="products.html?category=${category.id}">
                <img src="${category.image}" alt="${category.name}">
                <h3>${category.name}</h3>
                <span>${count || "New"} item${count === 1 ? "" : "s"}</span>
                <p>${category.description}</p>
                <i class="bx bx-right-arrow-alt"></i>
            </a>
        `;
    };

    const renderCategories = () => {
        const grid = document.querySelector("[data-category-grid]");

        if (grid) {
            grid.innerHTML = EpicFoodsCatalog.categories.map(categoryCard).join("");
        }
    };

    const renderProductsPage = () => {
        const grid = document.querySelector("[data-products-grid]");

        if (!grid) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const filter = document.querySelector("[data-category-filter]");
        const search = document.querySelector("[data-product-search]");
        const sort = document.querySelector("[data-product-sort]");
        const count = document.querySelector("[data-product-count]");
        const spotlight = document.querySelector("[data-product-spotlight]");

        if (filter && filter.options.length === 1) {
            EpicFoodsCatalog.categories.forEach((category) => {
                filter.insertAdjacentHTML("beforeend", `<option value="${category.id}">${category.name}</option>`);
            });
        }

        if (filter && params.get("category")) {
            filter.value = params.get("category");
        }

        if (spotlight && params.get("product")) {
            const product = findProduct(params.get("product"));
            spotlight.innerHTML = product ? `
                <div class="spotlight-copy">
                    <span>${product.categoryLabel}</span>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <strong>${formatPrice(product.price)}/${product.unit}</strong>
                    <div class="spotlight-actions">
                        <button class="btn" type="button" data-add-cart="${product.id}">Add to Cart<i class="bx bx-cart-alt"></i></button>
                        <button class="btn secondary-btn" type="button" data-wishlist="${product.id}">Wishlist<i class="bx bx-heart"></i></button>
                    </div>
                </div>
                <img src="${product.image}" alt="${product.name}">
            ` : "";
            spotlight.classList.toggle("active", Boolean(product));
        }

        const render = () => {
            let products = [...EpicFoodsCatalog.products];
            const selectedCategory = filter?.value || "all";
            const query = (search?.value || "").trim().toLowerCase();

            if (selectedCategory !== "all") {
                products = products.filter((product) => product.category === selectedCategory);
            }

            if (query) {
                products = products.filter((product) => (
                    product.name.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query) ||
                    product.categoryLabel.toLowerCase().includes(query)
                ));
            }

            if (sort?.value === "price-low") {
                products.sort((a, b) => a.price - b.price);
            } else if (sort?.value === "price-high") {
                products.sort((a, b) => b.price - a.price);
            } else if (sort?.value === "name") {
                products.sort((a, b) => a.name.localeCompare(b.name));
            }

            grid.innerHTML = products.length
                ? products.map(productCard).join("")
                : emptyState("No products found", "Try a different category or search term.", "View all products", "products.html");

            if (count) {
                count.textContent = `${products.length} product${products.length === 1 ? "" : "s"}`;
            }

            updateBadges();
        };

        [filter, search, sort].forEach((control) => {
            if (control) {
                control.oninput = render;
                control.onchange = render;
            }
        });

        render();
    };

    const emptyState = (title, body, linkText, href) => `
        <div class="empty-state">
            <i class="bx bx-basket"></i>
            <h2>${title}</h2>
            <p>${body}</p>
            <a class="btn" href="${href}">${linkText}<i class="bx bx-right-arrow-alt"></i></a>
        </div>
    `;

    const renderWishlistPage = () => {
        const list = document.querySelector("[data-wishlist-list]");

        if (!list) {
            return;
        }

        const products = getWishlist()
            .map(findProduct)
            .filter(Boolean);

        list.innerHTML = products.length
            ? products.map(productCard).join("")
            : emptyState("Your wishlist is empty", "Save fresh picks you want to order later.", "Browse products", "products.html");

        updateBadges();
    };

    const cartItemRow = ({ product, quantity }) => `
        <article class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="item-meta">
                <span>${product.categoryLabel}</span>
                <h3>${product.name}</h3>
                <p>${formatPrice(product.price)}/${product.unit}</p>
            </div>
            <div class="quantity-control" aria-label="Quantity for ${product.name}">
                <button type="button" data-quantity-step="${product.id}" data-step="-1" aria-label="Reduce ${product.name} quantity">-</button>
                <input type="number" min="1" value="${quantity}" data-cart-quantity="${product.id}" aria-label="${product.name} quantity">
                <button type="button" data-quantity-step="${product.id}" data-step="1" aria-label="Increase ${product.name} quantity">+</button>
            </div>
            <strong>${formatPrice(product.price * quantity)}</strong>
            <button class="text-btn" type="button" data-remove-cart="${product.id}">Remove</button>
        </article>
    `;

    const renderSummary = (target) => {
        if (!target) {
            return;
        }

        const subtotal = getCartTotal();
        const delivery = subtotal > 0 ? 1500 : 0;
        const total = subtotal + delivery;

        target.innerHTML = `
            <div class="summary-row"><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div>
            <div class="summary-row"><span>Delivery</span><strong>${formatPrice(delivery)}</strong></div>
            <div class="summary-row total"><span>Total</span><strong>${formatPrice(total)}</strong></div>
        `;
    };

    const renderCartPage = () => {
        const list = document.querySelector("[data-cart-list]");
        const summary = document.querySelector("[data-cart-summary]");

        if (!list && !summary) {
            return;
        }

        const items = getCartItems();

        if (list) {
            list.innerHTML = items.length
                ? items.map(cartItemRow).join("")
                : emptyState("Your cart is empty", "Add fresh food items to begin your order.", "Start shopping", "products.html");
        }

        renderSummary(summary);
        updateCheckoutState();
    };

    const updateCheckoutState = () => {
        const checkoutButton = document.querySelector("[data-checkout-button]");
        const placeOrderButton = document.querySelector("[data-place-order]");
        const hasItems = getCartItems().length > 0;

        if (checkoutButton) {
            checkoutButton.classList.toggle("disabled", !hasItems);
            checkoutButton.setAttribute("aria-disabled", String(!hasItems));
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = !hasItems;
        }
    };

    const renderOrderPage = () => {
        const list = document.querySelector("[data-order-items]");
        const summary = document.querySelector("[data-order-summary]");

        if (!list && !summary) {
            return;
        }

        const items = getCartItems();

        if (list) {
            list.innerHTML = items.length
                ? items.map(({ product, quantity }) => `
                    <div class="order-line">
                        <span>${quantity} x ${product.name}</span>
                        <strong>${formatPrice(product.price * quantity)}</strong>
                    </div>
                `).join("")
                : "<p class=\"muted\">No items in cart yet.</p>";
        }

        renderSummary(summary);
        updateCheckoutState();
    };

    const placeOrder = (form) => {
        const items = getCartItems();
        const status = document.querySelector("[data-order-status]");

        if (!items.length) {
            showToast("Add items to your cart before placing an order");
            return;
        }

        const formData = new FormData(form);
        const subtotal = getCartTotal();
        const delivery = 1500;
        const reference = `EPF-${Date.now().toString().slice(-6)}`;
        const order = {
            reference,
            customer: Object.fromEntries(formData.entries()),
            items,
            subtotal,
            delivery,
            total: subtotal + delivery,
            createdAt: new Date().toISOString()
        };

        writeStorage("epicFoodsLastOrder", order);
        saveCart([]);
        updateBadges();
        renderCartPage();
        renderOrderPage();
        form.reset();

        if (status) {
            status.innerHTML = `
                <div class="success-state">
                    <i class="bx bx-check-circle"></i>
                    <h2>Order received</h2>
                    <p>Your order reference is <strong>${reference}</strong>. Epic Foods can now connect this form to WhatsApp, email, or a payment gateway for live processing.</p>
                </div>
            `;
        }
    };

    const setActiveNav = () => {
        const path = window.location.pathname.split("/").pop() || "home.html";

        document.querySelectorAll(".navbar a").forEach((link) => {
            const href = link.getAttribute("href") || "";
            const isActive = href.includes(path) || (path === "" && href.includes("home.html"));
            link.classList.toggle("home-active", isActive);
        });
    };

    const wireActions = () => {
        document.addEventListener("click", (event) => {
            const addButton = event.target.closest("[data-add-cart]");
            const wishlistButton = event.target.closest("[data-wishlist]");
            const removeButton = event.target.closest("[data-remove-cart]");
            const quantityStep = event.target.closest("[data-quantity-step]");

            if (addButton) {
                addToCart(addButton.dataset.addCart);
            }

            if (wishlistButton) {
                toggleWishlist(wishlistButton.dataset.wishlist);
            }

            if (removeButton) {
                removeFromCart(removeButton.dataset.removeCart);
            }

            if (quantityStep) {
                const id = quantityStep.dataset.quantityStep;
                const current = getCart().find((item) => item.id === id)?.quantity || 1;
                updateQuantity(id, current + Number(quantityStep.dataset.step));
            }
        });

        document.addEventListener("change", (event) => {
            const input = event.target.closest("[data-cart-quantity]");

            if (input) {
                updateQuantity(input.dataset.cartQuantity, input.value);
            }
        });

        document.querySelectorAll("[data-order-form]").forEach((form) => {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                placeOrder(form);
            });
        });
    };

    const init = () => {
        setActiveNav();
        renderCategories();
        renderProductsPage();
        renderWishlistPage();
        renderCartPage();
        renderOrderPage();
        wireActions();
        updateBadges();
    };

    document.addEventListener("DOMContentLoaded", init);

    return {
        addToCart,
        getCart,
        getCartItems,
        getCartTotal,
        getWishlist,
        renderCartPage,
        renderOrderPage,
        renderWishlistPage,
        toggleWishlist,
        updateBadges,
        formatPrice
    };
})();
