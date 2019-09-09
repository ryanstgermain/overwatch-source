import React, { Component } from 'react';
import Heading from '../components/contact/Heading';
import EmailForm from '../components/contact/EmailForm';
import { Divider } from 'semantic-ui-react';

class ContactPage extends Component {
  render() {
    return (
      <>
        <Heading />
        <EmailForm />
        <Divider section hidden />
      </>
    );
  }
}

export default ContactPage;