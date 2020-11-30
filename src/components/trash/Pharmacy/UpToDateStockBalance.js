import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

class UpToDateStockBalance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="upToDateStockBal">
        <Card>
          <CardHeader>Rapport De Vente</CardHeader>
          <CardBody>
            <div style={{ marginTop: '20px' }}>
              <Table>
                <thead>
                  <tr>
                    <th>Article</th>
                    <th></th>
                    <th>Prix D´Achae</th>
                    <th>Prix De Vente</th>
                    <th>Montant</th>
                    <th>Unité D´Emission</th>
                    <th>Date D´Expiration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#"></a>
                    </td>
                    <td> </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
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

export default UpToDateStockBalance;
