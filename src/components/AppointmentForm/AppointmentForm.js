import { useMemo } from 'react';

import ContactPicker from "../ContactPicker/ContactPicker.js";

const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

const AppointmentForm = ({contacts, name, setName, contact, setContact, date, setDate, time, setTime, handleSubmit}) => {
    //gets the list of names in the contact list and make sure it updates
    const contactNames = useMemo(() => {
        return contacts.map((contact) => contact.name)
    }, [contacts]);

    return (
        <section className="appointment-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Appointment Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        aria-label="Appointment Name"
                    />
                </label>
                <br />
                <label>
                    <ContactPicker
                        name="contact"
                        value={contact}
                        contacts={contactNames}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        min={getTodayString()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        aria-label="Date Picker"
                    />
                </label>
                <br />
                <label>
                    <input
                        type="time"
                        name="time"
                        placeholder="Time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        aria-label="Time Picker"
                    />
                </label>
                <br />
                <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
            </form>
        </section>
    )
};

export default AppointmentForm;