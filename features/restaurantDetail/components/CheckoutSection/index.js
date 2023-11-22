import {
  ProductCheckout,
  ProductItemsCount,
  ItemCount,
  ProductInfo,
  ProductName,
  ProductTotalPrice,
  ProductCount,
  ProductSection,
  Increment,
  Count,
  Decrement,
  Checkout,
  Text,
  Total,
  ProductDesc,
} from "./Checkout.styled";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import EmptyBasket from "../EmptyBasket";
import {
  removeBasket,
  increment,
  decrement,
} from "../../../../store/slice/basketSlice";

const CheckoutSection = () => {
  const basketProduct = useSelector((state) => state.basket.basket);

  const dispatch = useDispatch();

  let sumBasket = basketProduct
    .reduce((acc, cur) => acc + parseFloat(cur.price) * cur.count, 0)
    .toFixed(2);

  const removeItem = (id) => {
    dispatch(removeBasket(id));
  };

  const Increase = (id) => {
    dispatch(increment(id));
  };

  const Decrease = (id) => {
    dispatch(decrement(id));
  };

  return (
    <ProductCheckout>
      <ProductSection>
        <ProductItemsCount
          style={{ color: basketProduct.length ? "#d63626" : "#bdbdbd" }}
        >
          <ShoppingBasketOutlinedIcon />
          <ItemCount>{basketProduct.length} items</ItemCount>
        </ProductItemsCount>

        {!basketProduct.length ? (
          <EmptyBasket />
        ) : (
          <>
            {basketProduct.map((item) => (
              <ProductInfo key={item.id}>
                <Image
                  src={item.image_url}
                  alt={item.product_name}
                  width={45}
                  height={45}
                />
                <ProductDesc>
                  <ProductName>{item.product_name}</ProductName>
                  <ProductTotalPrice>
                    ${Math.round(item.price * item.count * 100) / 100}
                  </ProductTotalPrice>
                </ProductDesc>
                <ProductCount>
                  <Increment
                    onClick={() => Increase(item.id)}
                    disabled={item.count === item.stockLimit && true}
                  >
                    +
                  </Increment>
                  <Count>{item.count}</Count>
                  <Decrement onClick={() => Decrease(item.id)}>-</Decrement>
                  <DeleteSweepOutlinedIcon
                    onClick={() => removeItem(item.id)}
                    style={{
                      position: "absolute",
                      top: "9px",
                      right: "2px",
                      color: "#BDBDBD",
                    }}
                  />
                </ProductCount>
              </ProductInfo>
            ))}
          </>
        )}
      </ProductSection>

      <Checkout
        style={{ background: basketProduct.length ? "#d63626" : "#bdbdbd" }}
      >
        <Text>Checkout</Text>
        <Total style={{ color: basketProduct.length ? "#d63626" : "#bdbdbd" }}>
          {basketProduct.length ? `$${sumBasket}` : "$0.00"}
        </Total>
      </Checkout>
    </ProductCheckout>
  );
};

export default CheckoutSection;
