import React from 'react';
import AddInvoice from './Addinvoice';
import { AddinvoiceComponentController } from './Addinvoice.control';

const AddContractComponent = () => {
  return (
    <>
      <AddinvoiceComponentController>
        <AddInvoice />
      </AddinvoiceComponentController>
    </>
  );
};

export default AddContractComponent;
