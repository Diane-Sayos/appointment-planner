import { useState } from 'react';

import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.js";
import TileList from "../../components/TileList/TileList.js";

const AppointmentsPage = (props) => {
    const [contact, setContact] = useState({});
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //add appointment using props

    };

    return (
        <section className="appointments-page">
            <section className="appointment-form-page">
                <h2>Add Appointment</h2>
                <AppointmentForm contacts={props.contacts} contact={contact} setContact={setContact} title={title} setTitle={setTitle} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
            </section>
            <section className="appointments-list">
                <TileList appointments={props.appointments} />
            </section>
        </section>
    )
};

export default AppointmentsPage;