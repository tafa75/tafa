import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FormErrors } from './FormErrors';

import { _fetchData, _postData } from '../helpers/helpers';
import Notifications, { notify } from 'react-notify-toast';

/**
 * The modal page for registering new patients
 * It consists of the input fields for filling the
 * details of the patient
 */
class ModalPage extends React.Component {
  constructor(props) {
    super(props);

    //initiating the state
    this.state = {
      id: '',
      surname: '',
      firstname: '',
      gender: '',
      age: '',
      maritalstatus: '',
      DOB: '',
      tribe: '',
      religion: '',
      phoneNo: '',
      email: '',
      nationality: '',
      state: '',
      lga: '',
      occupation: '',
      address: '',
      kinName: '',
      kinrelationship: '',
      kinphone: '',
      kinemail: '',
      kinoccupation: '',
      kinAddress: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      modal: false,
      selectedFile: '',
    };
  }

  /**
   * Handles the gender text field change
   */
  setGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  /**
   * Handles change in the text field
   */
  logChange = (e) => {
    this.setState({ [e.target.ref]: e.target.value });
  };

  /**
   * This toggles the modal page
   */
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  /**
   * This handles the change when user input some
   * data in the text fields
   */
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  /**
   * The method that validates the text fields and enable
   *  the submit button only if all data in the fields are valid
   */
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let firstnameValid = this.state.firstnameValid;
    let surnameValid = this.state.surnameValid;

    /**
     * this sets the condition for each field using the fieldName
     *  and also the corresponding error if the condition
     *  is not met
     */
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'firstname':
        firstnameValid = value.length > 2;
        fieldValidationErrors.firstname = firstnameValid ? '' : ' is too short';
        break;
      case 'surname':
        surnameValid = value.length > 2;
        fieldValidationErrors.surname = surnameValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        firstnameValid: firstnameValid,
        surnameValid: surnameValid,
      },
      this.validateForm
    );
  };

  /**
   * The method that eventually validate the form
   */
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.firstnameValid &&
        this.state.surnameValid,
    });
  }

  //if there is error
  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  /**
   * Handles the submit button click
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    data.gender = this.state.gender;
    for (const field in this.refs) {
      data[field] = this.refs[field].value;
    }

    this.props.receiveState(data);

    let route = 'patientrecords/new';
    let callback = () => {
      notify.show(data.message || 'Record Submitted', 'custom', 3000, 'blue');
    };

    let error_cb = (error) => {
      return notify.show(`Bad response from server`, 'custom', 3000, 'red');
    };
    _postData({ route, data, callback, error_cb });
  };

  get = () => {
    let self = this;
    let route = 'patientrecords/getId';
    let callback = (data) => self.setState({ id: JSON.stringify(data) });
    _fetchData({ route, callback });
  };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    console.log(this.state.selectedFile);
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle} style={{ margin: 10 }}>
          Nouveau patient
        </Button>
        <Notifications options={{ zIndex: 200, top: '50px' }} />
        {/* the modal starts here */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>Ajouter patient</ModalHeader>
          <ModalBody>
            {/* the form */}
            <form>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
                  <input type="file" onChange={this.fileChangedHandler} />
                  {/* <button onClick={this.uploadHandler}>Upload!</button>                   */}
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <label>Patient id</label>
                  {/* <input type="button" onClick={this.get} value="get" /> */}
                  <input
                    name="id"
                    onChange={this.handleUserInput}
                    type="text"
                    ref="id"
                    className="form-control id"
                    placeholder="patient id"
                    value={this.state.id}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Nom</label>
                  <input
                    onChange={this.handleUserInput}
                    name="surname"
                    type="text"
                    ref="surname"
                    className="form-control Surname"
                    placeholder="Nom"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Prenom</label>
                  <input
                    onChange={this.handleUserInput}
                    name="firstname"
                    type="text"
                    ref="firstname"
                    className="form-control Firstname"
                    placeholder="Prenom"
                  />
                </div>

                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-4">
                  <label>Sexe</label>
                  <label>
                    <input
                      onClick={this.setGender}
                      checked={this.state.gender === 'feminin'}
                      type="radio"
                      value="feminin"
                      name="Sexe"
                    />{' '}
                    Feminin
                  </label>
                  <label>
                    <input
                      onClick={this.setGender}
                      checked={this.state.gender === 'masculin'}
                      type="radio"
                      value="masculin"
                      name="sexe"
                    />{' '}
                    Masculin
                  </label>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Age</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="number"
                    ref="age"
                    placeholder="Age"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Situation Matrimoniale</label>
                  <select
                    onChange={this.logChange}
                    ref="maritalstatus"
                    className="form-control">
                    <option value="" />
                    <option value="single">Celibataire</option>
                    <option value="married">Marié</option>
                    <option value="divorced">Divorcé</option>
                  </select>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Date De Naissance</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="date"
                    ref="DOB"
                    placeholder="Date De Naissance"
                  />
                </div>


                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Telephone</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="number"
                    ref="phoneNo"
                    placeholder="Telephone"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Email </label>
                  <input
                    onChange={this.handleUserInput}
                    name="email"
                    className="form-control"
                    type="text"
                    ref="email"
                    placeholder="Email"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Nationalité</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="nationality"
                    placeholder="Nationalité"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Region</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="state"
                    placeholder="Region"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Departement</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="lga"
                    placeholder="departement"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Profession</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="occupation"
                    placeholder="Profession"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Addresse</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="textarea"
                    ref="address"
                    placeholder="Addresse"
                  />
                </div>
              </div>

              <h5>Accompagnant</h5>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Nom</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    ref="kinName"
                    placeholder="Accompagnant"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Relation</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="kinRelationship"
                    placeholder="Relation"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Telephone Accompagnant</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="kinPhone"
                    placeholder="Telephone Accompagnant"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Email </label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="kinEmail"
                    placeholder="Email Accompagnant"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Profession Accompagnant</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    ref="kinoccupation"
                    id="Occupation"
                    placeholder="Profession Accompagnant"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Addresse</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="textarea"
                    ref="kinAddress"
                    placeholder=" Addresse"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="offset-xs-4 offset-sm-4 offset-md-4 offset-lg-4 col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                  </div>
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    method="POST"
                    className="btn btn-primary"
                    disabled={!this.state.formValid}>
                    Envoyer
                  </button>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button toggle={this.toggle} className="btn btn-danger">
                    Annuler
                  </button>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalPage;
