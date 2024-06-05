import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBooksResponse, IBook } from "../types/interfaces";

interface BooksState {
  Books: IBook[];
  status: string | null;
  error: string | null;
}

const initialState: BooksState = {
  Books: [],
  status: null,
  error: null,
};



export const fetchBooks = createAsyncThunk<IBook[], void, { rejectValue: string }>(
  'Bookstore/fetchBooks',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://api.itbook.store/1.0/new');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: IBooksResponse = await response.json();
      const detailedBooks = await Promise.all(data.books.map(async (book: IBook) => {
        const detailedResponse = await fetch(`https://api.itbook.store/1.0/books/${book.isbn13}`);
        if (!detailedResponse.ok) {
          throw new Error(`HTTP error! status: ${detailedResponse.status}`);
        }
        return detailedResponse.json();
      }));
      return detailedBooks;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const BookStoreSlice = createSlice({
  name: "BookStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.Books = payload;
      })
      .addCase(fetchBooks.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload || "Unknown error";
      });
  },
});



export const selectBooks = (state: { BookStore: BooksState }) => state.BookStore.Books;

export default BookStoreSlice.reducer;





