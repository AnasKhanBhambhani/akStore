import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductById } from '../Services/AxiosApi';
export const fetchProduct = createAsyncThunk(
    'productById/fetchProduct',
    async (id) => {
        const response = await fetchProductById(id);
        return response;
    }
);
const ProductByIdSlice = createSlice({
    name: 'productById',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        resetProduct: (state) => {
            state.items = [],
                state.status = 'idle',
                state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export const { resetProduct } = ProductByIdSlice.actions;
export default ProductByIdSlice.reducer;
