import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/items/${id}`)
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the item!', error);
            });
    }, [id]);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        price: Yup.number().required('Price is required'),
        description: Yup.string().required('Description is required'),
    });

    const handleSubmit = (values) => {
        axios.put(`http://localhost:5000/items/${id}`, values)
            .then(response => {
                alert('Item updated successfully!');
            })
            .catch(error => {
                console.error('There was an error updating the item!', error);
            });
    };

    return (
        item ? (
            <div>
                <h2>Update Item</h2>
                <Formik
                    initialValues={item}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="div" />
                        </div>

                        <div>
                            <label htmlFor="price">Price</label>
                            <Field name="price" type="number" />
                            <ErrorMessage name="price" component="div" />
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <Field name="description" as="textarea" />
                            <ErrorMessage name="description" component="div" />
                        </div>

                        <button type="submit">Update Item</button>
                    </Form>
                </Formik>
            </div>
        ) : (
            <p>Loading...</p>
        )
    );
};

export default UpdateItem;
