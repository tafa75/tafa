import React, { Component } from 'react';
import { CardHeader, CardBody, Card } from 'reactstrap';

class DrugRequisition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      requisitionNo: '',
      drugs: '',
      quantity: '',
      requestSendTo: '',
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>Peticion De Medicament</CardHeader>
          <CardBody>
            <div className="row">
              <form className="col-md-8 ">
                <div className="form-group row">
                  <label className="col-md-3">Date</label>
                  <input
                    type="date"
                    className="form-control col-md-4"
                    onChange={e => this.setState({ date: e.target.value })}
                    value={this.state.date}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3"> Numero Requisition</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e =>
                      this.setState({ requisitionNo: e.target.value })
                    }
                    value={this.state.requisitionNo}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Medicaments</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e => this.setState({ drugs: e.target.value })}
                    value={this.state.drugs}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Quantité</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e => this.setState({ quantity: e.target.value })}
                    value={this.state.quantity}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Request Send to</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e =>
                      this.setState({ requestSendTo: e.target.value })
                    }
                    value={this.state.requestSendTo}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Balance</label>
                  <label className="col-md-4" />
                </div>
              </form>

              <div className="col-md-4">
                <button className="btn btn-default btn-secondary">
                  Send Request
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader> Liste Des Medicaments Selectionne</CardHeader>
          <CardBody>
            <div>
              <i>Rien Dans Cette Section</i>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DrugRequisition;
