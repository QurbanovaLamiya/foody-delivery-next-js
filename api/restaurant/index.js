import { Axios, AxiosMockCreate } from "../../mocks";
import restaurantData from "../../mocks/restaurant/restaurant.json";

AxiosMockCreate.onGet("/restaurant").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { restaurant: restaurantData }]);
    }, 1500);
  });
});

AxiosMockCreate.onGet(/\/restaurant\/\w+/).reply((config) => {
  return new Promise((resolve, reject) => {
    let slug = config.url.split("/")[2];
    const filterData = restaurantData.restaurants.find(
      (rest) => rest.slug == slug
    );
    setTimeout(() => {
      resolve([200, { restaurant: filterData }]);
    }, 10);
  });
});

export const restaurantAPI = Axios.get("/restaurant");
export const restaurantGetAPI = (slug) => Axios.get(`/restaurant/${slug}`);
