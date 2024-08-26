import React from 'react';
import { ListinvoiceComponentController } from './Listinvoice.control';
import ListContract from './ContractList';
//import { Route } from "react-router-dom";

const ListContractsComponent = () => {
  return (
    <>
      <ListinvoiceComponentController>
        <ListContract />
      </ListinvoiceComponentController>
    </>
  );
};

export default ListContractsComponent;
