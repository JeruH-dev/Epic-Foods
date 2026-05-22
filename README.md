# 🛒 Epic Foods

A responsive e-commerce web application for a fresh food and grocery store, built with vanilla HTML, CSS, and JavaScript.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://epic-foods.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/JeruH-dev/Epic-Foods)
![HTML](https://img.shields.io/badge/HTML-47.9%25-orange)
![CSS](https://img.shields.io/badge/CSS-27.3%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-24.8%25-yellow)

---

## 📖 Overview

Epic Foods is a fully front-end grocery e-commerce website that lets users browse products across multiple food categories, manage a shopping cart and wishlist, and place orders — all with a clean, modern UI. It is deployed on Vercel and requires no backend or build tools to run.

---

## ✨ Features

- **Hero Slider** — Auto-playing image carousel on the homepage powered by Swiper.js
- **Product Categories** — Browse across 9 categories: Fruit Juice, Healthy Food, Fruits, Vegetables, Drinks, Spices, Meat, Seafood, and Dairy
- **Product Listings** — Filterable product cards with pricing in NGN, discount badges, and direct add-to-cart/wishlist actions
- **Shopping Cart** — Add and manage items, with a live cart count badge in the navigation
- **Wishlist** — Save favourite products with a persistent wishlist count indicator
- **Order Page** — Dedicated order placement flow
- **Auth Modal** — Login and Sign Up modal dialog with tabbed forms
- **Customer Reviews** — Swipeable testimonials carousel
- **Newsletter Signup** — Email subscription form in the footer
- **Responsive Design** — Mobile-friendly layout with a hamburger menu for smaller screens

---

## 📁 Project Structure

```
Epic-Foods/
├── Images/               # All image assets (products, categories, hero slides, customers)
├── home.html             # Landing page — hero, categories, featured products, reviews
├── categories.html       # Full category listing page
├── products.html         # All products page with category filter support (?category=)
├── about.html            # About us, terms, and blog page
├── cart.html             # Shopping cart and payment options
├── wishlist.html         # Saved/wishlist items
├── order.html            # Order placement and delivery information
├── home.css              # Global styles
├── home.js               # Homepage-specific scripts (slider, about toggle, auth modal)
└── store.js              # Shared store logic (cart, wishlist, badge counts)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout, and responsive design |
| Vanilla JavaScript | UI interactivity, cart/wishlist logic |
| [Swiper.js v12](https://swiperjs.com/) | Hero slider and customer review carousel |
| [Boxicons](https://boxicons.com/) | Icon library |
| [Vercel](https://vercel.com/) | Hosting and deployment |

---

## 🚀 Getting Started

No build tools or package managers are required.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local server (recommended) — e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code

### Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/JeruH-dev/Epic-Foods.git
   cd Epic-Foods
   ```

2. **Open with Live Server**

   If using VS Code, right-click `home.html` and select **"Open with Live Server"**.

   Alternatively, open `home.html` directly in your browser:

   ```bash
   open home.html   # macOS
   start home.html  # Windows
   ```

> **Note:** Opening `home.html` directly via the `file://` protocol may cause issues with some relative asset paths. Using a local server is recommended.

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| Home | `home.html` | Landing page with hero slider, categories, featured products, reviews, and footer |
| Categories | `categories.html` | Overview of all food categories |
| Products | `products.html` | Full product grid; supports URL-based category filtering (`?category=fruit-juice`) |
| About | `about.html` | Store information, policies, and blog |
| Cart | `cart.html` | Shopping cart with payment options |
| Wishlist | `wishlist.html` | Saved items |
| Order | `order.html` | Order placement and delivery info |

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📬 Contact

**JeruH-dev** — [GitHub Profile](https://github.com/JeruH-dev)

---

## 📝 License

This project is open source. Feel free to use it as a reference or starting point for your own projects.

---

<p align="center">© 2026 Epic Foods. All rights reserved.</p>
