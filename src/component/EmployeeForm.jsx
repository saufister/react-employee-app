import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const EmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({ name: '', position: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.position) {
      // Tambahkan ID unik menggunakan uuid
      const newEmployee = { ...employee, id: uuidv4() };
      addEmployee(newEmployee);
      setEmployee({ name: '', position: '' });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="position">
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter position"
          name="position"
          value={employee.position}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Employee
      </Button>
    </Form>
  );
};

export default EmployeeForm;
