import React from 'react';
import { AddCustomerComponentController } from './addCustomer.control';
import AddProjects from './addProjects';

const AddProjectsComponent = () => {
  return (
    <>
      <AddCustomerComponentController>
        <AddProjects />
      </AddCustomerComponentController>
    </>
  );
};

export default AddProjectsComponent;
