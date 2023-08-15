import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveChange } from "../../store/contactSlice";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditContact = () => {
    let oneContact = useSelector((state) => state.contact.oneContact);
    let [contact, setcontact] = useState(oneContact);
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <Form.Group className="mt-5">
                    <FormControl
                        type="text"
                        placeholder="contact num"
                        onChange={(e) =>
                            setcontact({ ...contact, name: e.target.value })
                        }
                        value={contact.name}
                    />
                </Form.Group>

                <Form.Group className="mb-5 mt-3">
                    <FormControl
                        type="text"
                        placeholder="contact num"
                        onChange={(e) =>
                            setcontact({ ...contact, number: e.target.value })
                        }
                        value={contact.number}
                    />
                </Form.Group>
                <Link to="/list">
                    <Button
                        variant="dark"
                        onClick={() => dispatch(saveChange(contact))}>
                        Save Change
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default EditContact;
