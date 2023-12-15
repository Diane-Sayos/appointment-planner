
import { useState, useEffect } from 'react';

import ContactForm from "../../components/ContactForm/ContactForm.js";
import TileList from "../../components/TileList/TileList.js";

const ContactsPage = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        //add contact info and clear data if contact name is not duplicate
    }

    //using hooks, check for contact name in the contacts array variable in props

    return (
        <section className="contacts-page">
            <section className="contact-form-page">
                <h2>Add Contact</h2>
                <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
            </section>
            <section className="contacts-list">
                <h2>Contacts</h2>
                <TileList />
            </section>
        </section>
    )
};

export default ContactsPage;

//make sure to pass contacts props to tilelist