import React from 'react';
import { AddinvoiceComponentController } from './Addinvoice.control';
import AddBudget from './AddBudget';

const AddBudgetComponent = () => {
  return (
    <>
      <AddinvoiceComponentController>
        <AddBudget />
      </AddinvoiceComponentController>
    </>
  );
};

export default AddBudgetComponent;
