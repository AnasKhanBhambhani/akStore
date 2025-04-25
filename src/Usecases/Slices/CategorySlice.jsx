import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  fetchCategoryList } from '../Services/AxiosApi';


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      const response = await fetchCategoryList();
      return response;
    }
  );

const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default CategorySlice.reducer;
