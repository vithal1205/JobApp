import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "https://example.com/api/jobs";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    bookmarks: [],
    loading: false,
    error: null,
  },
  reducers: {
    bookmarkJob: (state, action) => {
      const job = action.payload;
      state.bookmarks.push(job);
      AsyncStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { bookmarkJob } = jobsSlice.actions;

export default jobsSlice.reducer;
