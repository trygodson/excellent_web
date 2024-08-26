import React from 'react';
import { AddCustomerComponentController } from './addCustomer.control';
import AddCustomers from './addCustomer';

const AddTenderComponent = () => {
  return (
    <>
      <AddCustomerComponentController>
        <AddCustomers />
      </AddCustomerComponentController>
    </>
  );
};

export default AddTenderComponent;
