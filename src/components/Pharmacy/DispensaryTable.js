import React, { Component } from 'react';
import { Table } from 'reactstrap';

class DispensaryTable extends Component {
  state = {};

  render() {
    return (
      <div>
        <center>
          <h5>Dispensaire Table</h5>
        </center>

        <Table>
          <thead>
            <tr>
              <th>PatientID</th>
              <th>Medicaments</th>
              <th>Dossage</th>
              <th>Quantité</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}
export default DispensaryTable;
