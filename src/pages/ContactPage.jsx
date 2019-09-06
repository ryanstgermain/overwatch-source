import React, { Component } from 'react';
import Heading from '../components/contact/Heading';
import EmailForm from '../components/contact/EmailForm';

class ContactPage extends Component {
  render() {
    return (
      <>
        <Heading />
        <EmailForm />
      </>
    );
  }
}

export default ContactPage;