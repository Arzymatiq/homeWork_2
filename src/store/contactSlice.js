import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        oneContact: null,
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(
                (item) => item.id != action.payload
            );
        },
        getOneContact: (state, action) => {
            let oneContact = state.contacts.find(
                (item) => item.id == action.payload
            );
            state.oneContact = oneContact;
        },
        saveChange: (state, action) => {
            state.contacts = state.contacts.map((item) => {
                if (item.id == action.payload.id) {
                    return action.payload;
                }
                return item;
            });
            state.oneContact = null;
        },
    },
});
export const { addContact, deleteContact, saveChange, getOneContact } =
    contactSlice.actions;
export default contactSlice.reducer;
