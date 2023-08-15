import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {
    const contacts = useSelector((state) => state.contact.contacts);
    console.log(contacts);
    return (
        <div>
            <ul>
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
