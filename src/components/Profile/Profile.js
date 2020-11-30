import React from "react";
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Profile = props => {
  return (
    <div>
      <UncontrolledButtonDropdown>
        <DropdownToggle>User</DropdownToggle>
        <DropdownMenu>
          <Card>
            <CardImg top width="100%" src="#" alt="User Profile Image" />
          </Card>
          <CardBody>
            <CardTitle> Profile Utilisateur</CardTitle>
            <CardText>Plus D´infomations</CardText>
            <Button>Voir Profile</Button>
          </CardBody>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  );
};

export default Profile;
