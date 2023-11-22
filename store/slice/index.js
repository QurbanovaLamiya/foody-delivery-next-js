import basketSlice from "./basketSlice";
import faqSlice from "./faqSlice";
import homeSlice from "./homeSlice";
import restaurantSlice from "./restaurantSlice";

export const reducers = {
  faq: faqSlice,
  home: homeSlice,
  restaurant: restaurantSlice,
  basket: basketSlice,
};
