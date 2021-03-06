import React, { Component } from 'react';
import PendingPharmacyRequest from './PendingPharmacyRequest';
import PharmacyDashboard from './PharmacyDashboard';
import './pharmacy.css';

export default class Pharmacy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      isRoute: true,
      processing: false,
      details: {},
    };
  }

  toggleProcessingForm = () =>
    this.setState((prevState) => ({ processing: !prevState.processing }));

  getDetails = (details) => {
    this.setState({ details });
    this.toggleProcessingForm();
  };

  toggleRoute = () =>
    this.setState((prevState) => ({ isRoute: !prevState.isRoute }));

  render() {
    const { details, processing } = this.state;
    const { getDetails, toggleProcessingForm } = this;
    return (
      <div className="row" style={{ backgroundColor: '#ffffff' }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="pharmacy-guide-container">
          
            <PendingPharmacyRequest
              getDetails={getDetails}
              processing={processing}
            />
            {/* <DispensaryTable/> */}
          </div>
        </div>
        <div
          className="col-xs-12 col-s-12 col-md-8 col-lg-8"
          style={{ paddingTop: '10px', height: 'auto' }}
        >
          <PharmacyDashboard
            details={details}
            processing={processing}
            toggleProcessingForm={toggleProcessingForm}
          />
        </div>
      </div>
    );
  }
}
