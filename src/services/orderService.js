import { apiRequest } from "./api";

// BUY product (1 product per request)
export const buyProduct = (productId, token) => {
  return apiRequest(
    "/orders?language=en",
    "POST",
    {
      product_id: productId,
    },
    token
  );
};