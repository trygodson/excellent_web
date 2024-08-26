import React from 'react';
import { ListCustomerController } from './listCustomer.control';
import ListCustomer from './listCustomer';

const TenderTrackingList = () => {
  return (
    <>
      <ListCustomerController>
        <ListCustomer />
      </ListCustomerController>
    </>
  );
};

export default TenderTrackingList;
