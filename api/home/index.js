import { Axios, AxiosMockCreate } from "../../mocks";
import homeData from "../../mocks/menu/menu.json";
import homeCardData from "../../mocks/homeNewFoods/homeNewFoods.json";

AxiosMockCreate.onGet("/home").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { home: homeData, homeCard: homeCardData }]);
    }, 1500);
  });
});

export const homeAPI = Axios.get("/home");
