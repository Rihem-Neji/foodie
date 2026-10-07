import Card from "react-bootstrap/Card";

function FoodCard({
  product,
  liked,
  onLike
}) {

  return (
    <Card className="food-card h-100">

      <div className="food-image-container">

        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="food-image"
        />

        <button
          className={
            liked
              ? "like-button liked"
              : "like-button"
          }
          onClick={() => onLike(product.id)}
          aria-label="Like product"
        >
          {liked ? "♥" : "♡"}
        </button>

      </div>

      <Card.Body>

        <span className="food-category">
          {product.category}
        </span>

        <Card.Title className="food-name">
          {product.name}
        </Card.Title>

        <Card.Text className="food-description">
          {product.description}
        </Card.Text>

        <div className="food-footer">

          <span className="food-price">
            {product.price.toFixed(2)} DT
          </span>

          <span className="order-text">
            Delicious
          </span>

        </div>

      </Card.Body>

    </Card>
  );
}

export default FoodCard;