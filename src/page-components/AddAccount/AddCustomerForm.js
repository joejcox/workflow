import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "redux/customers/customersSlice";
import styles from "./AddCustomerForm.module.scss";

const AddCustomerForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [capsDisabled, setCapsDisabled] = useState(false);

  /* Handle form submission...
    If the account_type value doesn't exist in state then return error.
    Add information to addCustomer reducer to push to global state.
    Reset the formData state.
    */
  const handleSubmit = (e) => {
    e.preventDefault();

    const { account_name, account_type, line1, line2, line3 } = formData;

    if (!formData.account_type) {
      return null;
    }

    dispatch(
      addCustomer({
        account_name: account_name,
        account_type: account_type,
        line1: line1,
        line2: line2,
        line3: line3,
        city: "Bristol",
        postcode: "BR14 15J",
      })
    );

    setFormData({});
    e.target.reset();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.form_field}>
        <label className={styles.label_input}>
          <input
            className={styles.input_checkbox}
            type="checkbox"
            onChange={() => setCapsDisabled(!capsDisabled)}
          />
          Turn off auto account name capitalisation
        </label>
      </div>
      <div className={`${styles.form_field} ${styles.is_half}`}>
        <label htmlFor="account_name">Account Name</label>
        <input
          className={styles.input}
          value={formData.account_name || ""}
          name="account_name"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>

      <div className={`${styles.form_field} ${styles.is_half}`}>
        <label htmlFor="account_type">Account Type</label>
        <select name="account_type" onChange={(e) => handleChange(e)} required>
          <option value="">Please select</option>
          <option value="Quote">Quote</option>
          <option value="Customer">Customer</option>
        </select>
      </div>

      <div className={`${styles.form_field} ${styles.is_one_third}`}>
        <label htmlFor="line1">Address Line One</label>
        <input
          className={styles.input}
          value={formData.line1 || ""}
          name="line1"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>

      <div className={`${styles.form_field} ${styles.is_one_third}`}>
        <label htmlFor="line2">Address Line Two</label>
        <input
          className={styles.input}
          value={formData.line2 || ""}
          name="line2"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className={`${styles.form_field} ${styles.is_one_third}`}>
        <label htmlFor="line3">Address Line Three</label>
        <input
          className={styles.input}
          value={formData.line3 || ""}
          name="line3"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <button className={styles.form_submit} type="submit">
        Add Customer
      </button>
    </form>
  );
};

export default AddCustomerForm;
