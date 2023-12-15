import { useState } from 'react';

import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.js";
import TileList from "../../components/TileList/TileList.js";

const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment(name, contact, date, time)
        setContact("")
        setName("")
        setDate("")
        setTime("")
    };

    return (
        <section className="appointments-page">
            <section className="appointment-form-page">
                <h2>Add Appointment</h2>
                <AppointmentForm contacts={contacts} contact={contact} setContact={setContact} name={name} setName={setName} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
            </section>
            <section className="appointments-list">
                <TileList appointments={appointments} />
            </section>
        </section>
    )
};

export default AppointmentsPage;