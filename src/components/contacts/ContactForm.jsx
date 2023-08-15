import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";

import { addContact } from "../../store/contactSlice";

const ContactForm = () => {
    const [contactName, setContactName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const dispatch = useDispatch();

    function createContact() {
        if (!contactName.trim() || !contactNumber.trim())
            return alert("some inp are empty");

        let newContactObj = {
            id: Date.now(),
            name: contactName,
            number: contactNumber,
        };
        dispatch(addContact(newContactObj));
    }
    return (
        <div>
            {/* <h3>Create contact </h3>
            <input
                type="text"
                onChange={(e) => setContactName(e.target.value)}
                value={contactName}
            />
            <input
                type="number"
                onChange={(e) => setContactNumber(e.target.value)}
                value={contactNumber}
            />
            <button onClick={createContact}>Create</button> */}
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="m-5">Create contact</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="contact name"
                        onChange={(e) => setContactName(e.target.value)}
                        value={contactName}
                    />
                </Form.Group>

                <Form.Group className="m-5">
                    <FormControl
                        type="text"
                        placeholder="contact num"
                        onChange={(e) => setContactNumber(e.target.value)}
                        value={contactNumber}
                    />
                </Form.Group>

                <Button variant="dark" onClick={createContact}>
                    Add Contact
                </Button>
            </div>
        </div>
    );
};

export default ContactForm;
