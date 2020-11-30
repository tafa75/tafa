import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

class DrugDispensingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>Informations Medicaments</CardHeader>
          <CardBody>
            <form>
              <div className="form-group row">
                <label className="control-label col-md-3">Date</label>
                <input
                  type="date"
                  className="form-control col-md-6"
                  ref="date"
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Medicaments</label>
                <input
                  type="text"
                  className="form-control col-md-6"
                  ref="drug"
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Quantité</label>
                <input
                  type="text"
                  className="form-control col-md-6"
                  ref="quantity"
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Prix</label>
                <label />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Balance</label>
                <label />
              </div>
              <button className="btn">Ajouter à la Liste</button>
              <button className="btn">Enregistrer</button>
            </form>
          </CardBody>
        </Card>

        <div style={{ margin: '5px' }}>
          <Table size="sm">
            <thead>
              <tr>
                <th>PARENT ID</th>
                <th>Date D´expiration</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHLORXY-G GEL</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DrugDispensingForm;
