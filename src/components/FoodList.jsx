import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FoodCard from "./FoodCard";

function FoodList({
  products,
  likedProducts,
  onLike
}) {

  return (
    <Container>

      <Row className="g-4">

        {products.map((product) => (

          <Col
            key={product.id}
            xs={12}
            sm={6}
            lg={4}
          >

            <FoodCard
              product={product}
              liked={likedProducts.includes(product.id)}
              onLike={onLike}
            />

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default FoodList;