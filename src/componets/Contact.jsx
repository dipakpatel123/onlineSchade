import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../assets/css/Contact.css";
import GetIntoch from "./GetIntoch";
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        appointmentOption: "",
        otherwise: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required.";
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone Number is required.";
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone Number must be exactly 10 digits.";
        }
        if (!formData.emailAddress.trim()) {
            newErrors.emailAddress = "Email Address is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            newErrors.emailAddress = "Invalid Email Address.";
        }
        if (!formData.appointmentOption.trim()) {
            newErrors.appointmentOption = "Appointment option is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Save to localStorage
            localStorage.setItem("contactFormData", JSON.stringify(formData));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Form submitted successfully!",
                showConfirmButton: false,
                timer: 1500,
            });

            // Clear the form
            setFormData({
                fullName: "",
                phoneNumber: "",
                emailAddress: "",
                appointmentOption: "",
                otherwise: "",
            });
            setErrors({});
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
            <section className="contact_section">
                <div className="contact_part">
                    <div className="container">
                        <div className="title_part">
                            <h2 className="heading">Contact Us</h2>
                            <p className="Body-B1">
                                Would you like to know more or experience in practice what OnlineSchadestaat can do for
                                you?Then contact us for a free introductory meeting and demonstration.The latter is also
                                possible on the basis of a current file from your office!
                            </p>
                        </div>

                        <div className="form-container p-4 rounded">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <Form.Group controlId="fullName">
                                            <Form.Control
                                                type="text"
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className={errors.fullName ? "is-invalid" : ""}
                                            />
                                            {errors.fullName && (
                                                <div className="invalid-feedback">{errors.fullName}</div>
                                            )}
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-lg-0 mt-sm-3 mt-3">
                                        <Form.Group controlId="phoneNumber">
                                            <Form.Control
                                                type="number"
                                                placeholder="Phone Number"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                className={errors.phoneNumber ? "is-invalid" : ""}
                                                onInput={(e) => {
                                                    if (e.target.value.length > 10)
                                                        e.target.value = e.target.value.slice(0, 10);
                                                }}
                                            />
                                            {errors.phoneNumber && (
                                                <div className="invalid-feedback">{errors.phoneNumber}</div>
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
                                                className={errors.emailAddress ? "is-invalid" : ""}
                                            />
                                            {errors.emailAddress && (
                                                <div className="invalid-feedback">{errors.emailAddress}</div>
                                            )}
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <select
                                            id="appointmentOption"
                                            className={`w-100 form-control ${
                                                errors.appointmentOption ? "is-invalid" : ""
                                            }`}
                                            value={formData.appointmentOption}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select an Option</option>
                                            <option value="Demo">
                                                I would like to make an appointment for a no-obligation demonstration.
                                            </option>
                                            <option value="CurrentFile">
                                                I would like to make an appointment for a demonstration based on a
                                                current file.
                                            </option>
                                        </select>
                                        {errors.appointmentOption && (
                                            <div className="invalid-feedback">{errors.appointmentOption}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <Form.Group controlId="otherwise">
                                            <Form.Control
                                                type="text"
                                                placeholder="Otherwise"
                                                value={formData.otherwise}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="steer_btn">
                                    <button type="submit" className="w-15">
                                        Send <img src="src/assets/img/home-img/white-cross-arrow.svg" alt="" />
                                    </button>
                                </div>
                            </form>
                        </div>

                        <GetIntoch />
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.389546924463!2d72.49382797477193!3d23.082831614077794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ce9f8b3c00f%3A0xd4e681d1f2ca76ab!2sSal%20Engineering%20And%20Technical%20Institute.%20Class%20Room%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sin!4v1715769939882!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
