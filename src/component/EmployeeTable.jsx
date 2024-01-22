import React from 'react';
import { Table } from 'react-bootstrap';

const EmployeeTable = ({ employees }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
