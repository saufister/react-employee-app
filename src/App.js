import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmployeeForm from './component/EmployeeForm';
import EmployeeTable from './component/EmployeeTable';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <EmployeeForm addEmployee={addEmployee} />
        </Col>
        <Col md={6}>
          <EmployeeTable employees={employees} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
