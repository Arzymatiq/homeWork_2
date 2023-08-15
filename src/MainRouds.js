import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactList from "./components/contacts/ContactList";
import ContactForm from "./components/contacts/ContactForm";
import EditContact from "./components/contacts/EditContact";

const MainRouds = () => {
    return (
        <Routes>
            <Route path="/list" element={<ContactList />} />
            <Route path="/" element={<ContactForm />} />
            <Route path="/edit" element={<EditContact />} />
        </Routes>
    );
};

export default MainRouds;
