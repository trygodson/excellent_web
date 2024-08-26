import React from 'react';
import { EditinvoiceComponentController } from './EditInvoice.control';
import EditBudget from './EditBudget';

const EditBudgetComponent = () => {
  return (
    <>
      <EditinvoiceComponentController>
        <EditBudget />
      </EditinvoiceComponentController>
    </>
  );
};

export default EditBudgetComponent;
