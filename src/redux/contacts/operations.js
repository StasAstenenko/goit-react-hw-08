import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instanceContact = axios.create({
  baseURL: "https://66d548b1f5859a70426577ac.mockapi.io",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instanceContact.get("/contacts");
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await instanceContact.post("/contacts", contact);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instanceContact.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
