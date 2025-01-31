import React from "react";
import { useState } from "react";
import "./styles.css";
import CustomerNavBar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import ProductImage from "./product.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import Typography from "@material-ui/core/Typography";

const Counter = (props) => {
  const [qty, setQuantity] = useState(1);

  const increment = () => {
    props.qtyFunc(props.qty + 1);
  };
  const decrement = () => {
    props.qtyFunc(props.qty - 1);
  };

  return (
    <div class="quantity-box">
      <p id="qty">{props.qty}</p>
      <div class="increment-button">
        <button class="increment-button" onClick={increment}>
          {" "}
          <KeyboardArrowUpIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
        <button class="increment-button" onClick={decrement}>
          {" "}
          <KeyboardArrowDownIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    color: "#ffffff",
    backgroundColor: "#d67d20",
    marginLeft: "51%",
    marginTop: "-14%"
  }
}));
const StyledRating = withStyles({
  // root:{
  //   marginTop: "-26%",
  //   marginLeft: "47%"
  // },
  iconFilled: {
    color: "#d67d20"
  },
  iconHover: {
    color: "#ff3d47"
  }
})(Rating);
const Product = () => {
  const classes = useStyles();
  let productData = {
    name: "Multani Ceramic Dishes",
    inStock: 1,
    rating: 4,
    Description: "Multi-colored satin glazed",
    Additional: "Single pieces or as pair (same or different dishes)",
    Price: "Rs. 1200"
  };

  let ArtisanData = {
    name: "Humaira Abid",
    bio:
      "She belongs to the city of shrines where she learnt the art from her father at an early age and now she uses it as her primary source of income"
  };

  let state = {
    reviews: [
      {
        name: "Momina Amer",
        rating: 4,
        review:
          "The delivery of the bowls was super quick which was quite a pleasant surprise. As for the quality of the bowls, they were extremely beautiful and of above average quality."
      },

      {
        name: "Vafa Batool",
        rating: 5,
        review: "9/10 quality. Would totally recommend!!!"
      }
    ],
    product: [
      {
        productID: "00199",
        productTitle: "Multani Ceramic ",
        quantity: 1,
        price: 200
      }
    ]
  };

  const [value] = React.useState(productData.rating);
  // const [qty, setQuantity] = useState(quantity);

  const renderReviews = () => {
    return state.reviews.map((rev, index) => {
      const { name, rating, review } = rev; //destructuring
      return (
        <div>
          <p>
            <div className="reviewer-name">{name}</div>
            <br />
          </p>
          <div className="reviewer-rating">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <StyledRating name="read-only" value={rating} readOnly />
            </Box>
          </div>
          <br />
          <div className="review">{review}</div>
        </div>
      );
    });
  };

  const { productID, productTitle, quantity, price } = state.product; //destructuring
  const [qty, setQuantity] = React.useState(quantity);
  const renderProduct = () => {
    let InStockArr = [];

    if (productData.inStock === 1) {
      InStockArr = [<span>&#10003; {`in stock`}</span>];
    } else {
      InStockArr = [<span>&#x2613; {`out of stock`}</span>];
    }
    return (
      <div>
        <span>
          <img className="product-image" src={ProductImage} alt="Logo" />
          <div className="product-title">{productData.name}</div>;
          <p className="in-stock">{InStockArr}</p>
          <div className="rating">
            {/* {`${productData.rating}/5.0`} */}
            <Box component="fieldset" mb={3} borderColor="transparent">
              <span>
                {productData.rating}/5.0
                {/* <Typography component="legend"></Typography> */}
                <StyledRating name="read-only" value={value} readOnly />
              </span>
            </Box>
          </div>
          <h4>Description:</h4>
          <p className="description">
            {productData.Description} <br /> {productData.Additional}{" "}
          </p>
          {/* <div>{productData.Description}</div>
            <div>{productData.Additional}</div> */}
          {/* <div className="price-text">{productData.Price}</div> */}
          <div className="price-text">{productData.Price}</div>
          <p className="quantity">per piece</p>
          <Counter
            className="quantity-counter"
            qty={qty}
            qtyFunc={setQuantity}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
          <div>
            <h3 className="artisan-title">Artisan</h3>
            <div className="artisan-name">{ArtisanData.name}</div>
            <div className="artisan-bio">{ArtisanData.bio}</div>
          </div>
          <div>
            <div className="reviews-heading">Reviews</div>
            {renderReviews()}
          </div>
        </span>
      </div>
    );
  };

  return (
    <div>
      <CustomerNavBar />
      <Memory panel="Catalog " page="Home" current=" Kitchen" />
      {/* <a id=back-btn><img src=/css/back.png width="26"></a> */}
      {renderProduct()}
      <BottomBar />
    </div>
  );
};

export default Product;
