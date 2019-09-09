import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const EmailForm = () => {
  return (
    <div className='contact-form-align'>
      <Form className='contact-form'>
        <Form.Field className='contact-form-text' required>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field className='contact-form-text' required>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field className='contact-form-text' required>
          <label>Subject</label>
          <input placeholder='Subject' />
        </Form.Field>
        <Form.TextArea className='contact-form-text' label='Message' placeholder='Message...' required />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

export default EmailForm;