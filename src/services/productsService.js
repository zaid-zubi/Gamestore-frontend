import { apiRequest } from "./api";

// GET products with pagination
export const getProducts = (skip = 0, limit = 10, location = null) => {
  let url = `/products?skip=${skip}&limit=${limit}&language=en`;

  if (location) {
    url += `&location=${location}`;
  }

  return apiRequest(url);
};

// GET single product
export const getProductById = (id) => {
  return apiRequest(`/products/${id}`);
};