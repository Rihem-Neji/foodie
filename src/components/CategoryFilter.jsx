import Container from "react-bootstrap/Container";

function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory
}) {

  return (
    <Container>

      <div className="category-container">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

    </Container>
  );
}

export default CategoryFilter;