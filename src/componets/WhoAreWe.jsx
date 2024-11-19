import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../assets/css/WhoAreWe.css";
import GetIntoch from './GetIntoch';
import Swal from 'sweetalert2';


const WhoAreWe = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        firstName: '',
        surname: '',
        streetAddress: '',
        postalCode: '',
        city: '',
        telephone: '',
        emailAddress: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.surname.trim()) newErrors.surname = 'Surname is required.';
        if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required.';
        if (!formData.postalCode.trim()) {
            newErrors.postalCode = 'Postal code is required.';
        } else if (!/^\d+$/.test(formData.postalCode)) {
            newErrors.postalCode = 'Postal code must be numeric.';
        } else if (formData.postalCode.length < 4 || formData.postalCode.length > 6) {
            newErrors.postalCode = 'Postal code must be 4 to 6 digits.';
        }
        if (!formData.city.trim()) newErrors.city = 'City is required.';
        if (!formData.telephone.trim()) {
            newErrors.telephone = 'Telephone number is required.';
        } else if (formData.telephone.length !== 10) {
            newErrors.telephone = 'Telephone number must be exactly 10 digits.';
        }
        if (!formData.emailAddress.trim()) {
            newErrors.emailAddress = 'Email address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            newErrors.emailAddress = 'Invalid email format.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {

            localStorage.setItem('formData', JSON.stringify(formData));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });

            setFormData({
                companyName: '',
                firstName: '',
                surname: '',
                streetAddress: '',
                postalCode: '',
                city: '',
                telephone: '',
                emailAddress: '',
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fix the errors before submitting.",
            });
        }
    };

    return (
        <>
            <div className="WhoAreWe_section">
                <div className="WhoAreWe_part">
                    <div className="try_it_now">
                        <div className="container">
                            <div className="title_part">
                                <h2 className="heading">Try it now</h2>
                                <p className="Body-B1">
                                    OnlineSchadestaan enables you to administer your personal injury files easily and with a low threshold.
                                    Would you like to experience it yourself? Then fill in the form below and we will immediately create an account
                                    for you so that you can experience the benefits of the software yourself.
                                </p>
                            </div>
                            <div className="form-container rounded">
                                <div className="form_box">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <Form.Group controlId="companyName">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Company Name"
                                                        value={formData.companyName}
                                                        onChange={handleChange}
                                                        className={errors.companyName ? 'is-invalid' : ''}
                                                    />
                                                    {errors.companyName && (
                                                        <div className="invalid-feedback">{errors.companyName}</div>
                                                    )}
                                                </Form.Group>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <Form.Group controlId="firstName">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Full Name"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        className={errors.firstName ? 'is-invalid' : ''}
                                                    />
                                                    {errors.firstName && (
                                                        <div className="invalid-feedback">{errors.firstName}</div>
                                                    )}
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="surname">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Surname"
                                                        value={formData.surname}
                                                        onChange={handleChange}
                                                        className={errors.surname ? 'is-invalid' : ''}
                                                    />
                                                    {errors.surname && (
                                                        <div className="invalid-feedback">{errors.surname}</div>
                                                    )}
                                                </Form.Group>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <Form.Group controlId="streetAddress">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Street & House Number"
                                                        value={formData.streetAddress}
                                                        onChange={handleChange}
                                                        className={errors.streetAddress ? 'is-invalid' : ''}
                                                    />
                                                    {errors.streetAddress && (
                                                        <div className="invalid-feedback">{errors.streetAddress}</div>
                                                    )}
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="postalCode">
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Postal Code"
                                                        value={formData.postalCode}
                                                        onChange={handleChange}
                                                        className={errors.postalCode ? 'is-invalid' : ''}
                                                    />
                                                    {errors.postalCode && (
                                                        <div className="invalid-feedback">{errors.postalCode}</div>
                                                    )}
                                                </Form.Group>
                                            </div>

                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <Form.Group controlId="city">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="City"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        className={errors.city ? 'is-invalid' : ''}
                                                    />
                                                    {errors.city && (
                                                        <div className="invalid-feedback">{errors.city}</div>
                                                    )}
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="telephone">
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Telephone"
                                                        value={formData.telephone}
                                                        onChange={handleChange}
                                                        className={errors.telephone ? 'is-invalid' : ''}
                                                        onInput={(e) => {
                                                            if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10);
                                                        }}
                                                    />
                                                    {errors.telephone && (
                                                        <div className="invalid-feedback">{errors.telephone}</div>
                                                    )}
                                                </Form.Group>
                                            </div>


                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <Form.Group controlId="emailAddress">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Email Address"
                                                        value={formData.emailAddress}
                                                        onChange={handleChange}
                                                        className={errors.emailAddress ? 'is-invalid' : ''}
                                                    />
                                                    {errors.emailAddress && (
                                                        <div className="invalid-feedback">{errors.emailAddress}</div>
                                                    )}
                                                </Form.Group>
                                            </div>
                                        </div>

                                        <div className="steer_btn">
                                            <button type="submit" className="w-15">
                                                Submit <img src="src/assets/img/home-img/white-cross-arrow.svg" alt="" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <GetIntoch />
                </div>
            </div>
        </>
    );
};

export default WhoAreWe;
