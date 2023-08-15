import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteContact, getOneContact } from "../../store/contactSlice";
import { Link } from "react-router-dom";
const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Card>
                <Card.Header>{contact.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>{contact.number} </Card.Text>
                    <Link to="/edit">
                        <Button
                            className="m-2"
                            variant="primary"
                            onClick={() => dispatch(getOneContact(contact.id))}>
                            edit
                        </Button>
                    </Link>
                    <Button
                        className="m-2"
                        variant="primary"
                        onClick={() => dispatch(deleteContact(contact.id))}>
                        delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContactItem;
