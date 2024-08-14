import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const initialValues = {
    name: '',
    description: '',
    price: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Price must be positive')
  });

  const onSubmit = (values, { resetForm }) => {
    setSubmissionStatus('Submitting...');
    axios.post('http://localhost:5000/items', values)
      .then(response => {
        console.log(response.data);
        setSubmissionStatus('Item added successfully!');
        resetForm();
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
        setSubmissionStatus('Failed to add item. Please try again.');
      });
  };

  
  useEffect(() => {
    
    console.log('Component mounted or updated');

    
    return () => {
      console.log('Component unmounted');
    };
  }, []); 

  return (
    <div className="container">
      <h1>Add New Pizza</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label>Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <Field name="description" type="text" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Price</label>
            <Field name="price" type="number" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Add Pizza</button>
        </Form>
      </Formik>
      {submissionStatus && <div className="mt-3">{submissionStatus}</div>}
    </div>
  );
};

export default AddNewItem;
