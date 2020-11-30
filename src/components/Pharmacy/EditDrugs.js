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


class EditDrugs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h3> Editer Medicaments</h3>
          </CardHeader>
          <CardBody>
            <div className="row">
              <InputGroup className="col-md-7">
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="primary">Chercher</Button>
                </InputGroupAddon>
              </InputGroup>
              <select className="col-md-1">
                <option value="actions">Actions</option>
              </select>
              <div className="col-md-2" />
              <Button className="btn btn-primary col-md-1">Creer</Button>
            </div>

            <div style={{ marginTop: '20px' }}>
              <Table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Prix</th>
                    <th>Balance</th>
                    <th>Uniter</th>
                    <th>Date D´expiration</th>
                    <th>Categorie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>   </td>
                    <td>  </td>
                    <td>  </td>
                    <td> </td>
                    <td>  </td>
                    <td>-</td>
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

export default EditDrugs;
