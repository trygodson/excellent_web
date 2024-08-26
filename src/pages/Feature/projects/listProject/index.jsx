import React from 'react';
import { ListCustomerController } from './listCustomer.control';
import ListProjects from './listProject';

const ListProjectComponent = () => {
  return (
    <>
      <ListCustomerController>
        <ListProjects />
      </ListCustomerController>
    </>
  );
};

export default ListProjectComponent;
