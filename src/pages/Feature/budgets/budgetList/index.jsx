import React from 'react';
import Listinvoice from './ListBudget';
import { ListinvoiceComponentController } from './Listinvoice.control';
//import { Route } from "react-router-dom";

const ListBudgetComponent = () => {
  return (
    <>
      <ListinvoiceComponentController>
        <Listinvoice />
      </ListinvoiceComponentController>
    </>
  );
};

export default ListBudgetComponent;
