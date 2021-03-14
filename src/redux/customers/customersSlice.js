import { createSlice } from "@reduxjs/toolkit";
import customers_data from "data/customers_data.json";

export const customersSlice = createSlice({
  name: "customers",
  initialState: {
    data: customers_data,
  },
  reducers: {
    addCustomer: (state, action) => {
      const lastCustomer = state.data[state.data.length - 1];
      const newId = lastCustomer.customer_id + 1;
      const {
        account_name,
        account_type,
        line1,
        line2,
        line3,
        city,
        postcode,
      } = action.payload;
      state.data.push({
        customer_id: newId,
        account_name: account_name,
        account_type: account_type,
        address: {
          first_line: line1,
          second_line: line2,
          third_line: line3,
          city: city,
          postcode: postcode,
        },
      });
    },
    removeCustomer: (state, action) => {
      state.data = state.data.filter(
        (customer) => customer.customer_id !== action.payload
      );
    },
  },
});

export const { addCustomer, removeCustomer } = customersSlice.actions;

export const Customers = (state) => state.customers.data;

export default customersSlice.reducer;
