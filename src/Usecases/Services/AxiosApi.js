import axios from 'axios';

// Base URLs for the API
let BaseUrl = import.meta.env.VITE_BASE_URL;


// Function to fetch all products
export const fetchAllProducts = async ({ skip, limit, q, category }) => {
    try {
        let url = `${BaseUrl}/search?limit=${limit}&skip=${skip}&q=${q}`;
        if (category) {
            url = `${BaseUrl}/category/${category}?limit=${limit}&skip=${skip}`
        }
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error('Error fetching all products:', error);
        throw error;
    }
};

// Function to fetch a product by ID
export const fetchProductById = async ({id}) => {
    try {
        const response = await axios.get(`${BaseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
};
export const fetchCategoryList = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/categories`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching category`, error);
        throw error;
    }
};

