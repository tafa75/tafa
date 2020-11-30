import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  InputGroup,
  Table,
  InputGroupAddon,
} from 'reactstrap';

class SalesReport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="salesReport">
        <Card>
          <CardHeader>Raport</CardHeader>
          <CardBody>
            <div className="row">
              <InputGroup className="col-md-7">
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Chercher</Button>
                </InputGroupAddon>
              </InputGroup>
              <select className="col-md-2">
                <option value="actions">Actions</option>
              </select>
            </div>

            <div style={{ marginTop: '20px' }}>
              <Table>
                <thead>
                  <tr>
                    <th>Edit</th>
                    <th>Ledger Date</th>
                    <th>Desription</th>
                    <th>Destination By</th>
                    <th>Dr.</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Patient Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button className="btn">Edit</button>
                    </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>   </td>
                    <td>   </td>
                    <td>  </td>
                    <td>  </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SalesReport;
