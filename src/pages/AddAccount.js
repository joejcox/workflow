import React from "react";
import AddCustomerForm from "page-components/AddAccount/AddCustomerForm";
import { useSelector } from "react-redux";
import { Customers } from "redux/customers/customersSlice";
import PageTitle from "components/PageTitle/PageTitle";
import styles from "./AddAccount.module.scss";

const AddAccount = ({ title }) => {
  const customers = useSelector(Customers);

  return (
    <>
      <PageTitle>{title}</PageTitle>
      <AddCustomerForm />
      <div className={styles.customer_list}>
        {customers.map((customer) => {
          return (
            <div className={styles.customer} key={customer.customer_id}>
              <section>
                <h4>{customer.account_name}</h4>
                <p>ID: {customer.customer_id}</p>
                <p>Type: {customer.account_type}</p>
              </section>
              <section>
                <h4 className={styles.address}>Address:</h4>
                <p>{customer.address.first_line}</p>
                <p>{customer.address.second_line}</p>
                <p>{customer.address.third_line}</p>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddAccount;
