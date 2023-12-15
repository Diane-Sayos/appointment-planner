
import { useState, useEffect } from 'react';

import ContactForm from "../../components/ContactForm/ContactForm.js";
import TileList from "../../components/TileList/TileList.js";

const ContactsPage = ({ contacts, addContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [duplicate, setDuplicate] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!duplicate){
            addContact(name, phone, email)
            setName("")
            setPhone("")
            setEmail("")
        }
    };

    useEffect(() => {
        const nameIsDuplicate = () => {
            const found = contacts.find((contact) => contact.name === name);
            if(found !== undefined){
                return true;
            }
            return false;
        }

        if(nameIsDuplicate()){
            setDuplicate(true)
        } else {
            setDuplicate(false)
        }
    }, [name, contacts, duplicate]);

    return (
        <section className="contacts-page">
            <section className="contact-form-page">
                <h2>Add Contact {duplicate ? "- Name Already Exists" : ""}</h2>
                <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
            </section>
            <section className="contacts-list">
                <h2>Contacts</h2>
                <TileList contacts={contacts}/>
            </section>
        </section>
    )
};

export default ContactsPage;