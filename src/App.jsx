import { useState } from "react";

import NavigationBar from "./components/Navbarr";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import FoodList from "./components/FoodList";
import Footer from "./components/Footer";

import { products } from "./data/products";

function App() {

  // =========================
  // STATE 1 — CATEGORY
  // =========================

  const [selectedCategory, setSelectedCategory] =
    useState("All");


  // =========================
  // STATE 2 — LIKES
  // =========================

  const [likedProducts, setLikedProducts] =
    useState([]);


  // =========================
  // STATE 3 — DARK MODE
  // =========================

  const [darkMode, setDarkMode] =
    useState(false);


  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Pasta",
    "Desserts",
    "Drinks"
  ];


  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );


  // =========================
  // LIKE / UNLIKE
  // =========================

  const handleLike = (productId) => {

    setLikedProducts((currentLikes) => {

      if (currentLikes.includes(productId)) {

        return currentLikes.filter(
          (id) => id !== productId
        );

      }

      return [...currentLikes, productId];

    });

  };


  // =========================
  // APPLICATION
  // =========================

  return (

    <div
      className={
        darkMode
          ? "app dark-mode"
          : "app"
      }
    >

      <NavigationBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      <Hero />


      <main id="menu">

        {/* CATEGORY FILTER */}

        <section className="filter-section">

          <div className="section-heading">

            <span>
              OUR MENU
            </span>

            <h2>
              Choose your favorite
            </h2>

            <p>
              Explore our delicious selection.
            </p>

          </div>


          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

        </section>


        {/* FOOD PRODUCTS */}

        <section className="products-section">

          <FoodList
            products={filteredProducts}
            likedProducts={likedProducts}
            onLike={handleLike}
          />

        </section>


        {/* FAVORITES COUNTER */}

        <div className="favorites-counter">

          ❤️ {likedProducts.length} favorite
          {likedProducts.length !== 1 ? "s" : ""}

        </div>

      </main>


      <Footer />

    </div>

  );
}

export default App;