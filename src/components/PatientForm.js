import React from 'react';
import { Container } from 'reactstrap';

import { toCamelCase } from './helpers/helpers';
// import './print.css';

/**
 * This component renders the basic details of the patient.
 */
function PatientForm({ record }) {
  const username = localStorage.getItem('user');
  const doctor = toCamelCase(username);
  const date = new Date();
  const flexStyle = { display: 'flex', flexDirection: 'horizontal' };
  return (
    <Container style={flexStyle}>
      <div style={{ width: '20%' }}>
        
      </div>
      <div style={{ width: '80%' }}>
        <div style={flexStyle}>
          <div className="label" style={{ padding: '.7em', width: '41.66%' }}>
            <label>Nom: </label>
            <span>
              {record.surname} {record.firstname}
            </span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '25%' }}>
            <label>Sexe: </label>
            <span>{record.gender}</span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '33.33%' }}>
            <label>DOB: </label>
            <span>{record.DOB}</span>
          </div>
        </div>
        <div style={flexStyle}>
          <div className="label" style={{ padding: '.7em', width: '41.66%' }}>
            <label>Telephone: </label>
            <span>{record.phoneNo}</span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '25%' }}>
            <label>ID: </label>
            <span>{record.id}</span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '33.33%' }}>
            <label>Docteur: </label>
            <span>{doctor}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PatientForm;
