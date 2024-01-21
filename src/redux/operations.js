import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65a93b63219bfa371868d7b4.mockapi.io';

export const fetchCars = createAsyncThunk(
  'Cars/fetchAll',
  async (page, { rejectWithValue }) => {
    try {
      const url = `/Cars?page=${page}&limit=12`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
