import { Axios, AxiosMockCreate } from "../../mocks";
import faqsData from "../../mocks/faq/faq.json";

AxiosMockCreate.onGet("/faq").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { faq: faqsData }]);
    }, 1500);
  });
});

export const faqsAPI = Axios.get("/faq");
