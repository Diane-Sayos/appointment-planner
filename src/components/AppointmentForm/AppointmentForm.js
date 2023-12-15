
const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

const AppointmentForm = ({contacts, title, setTitle, contact, setContact, date, setDate, time, setTime, handleSubmit}) => {
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    };
    const handleContactChange = (e) => {
        setContact(e.target.value)
    };
    const handleDateChange = (e) => {
        setDate(e.target.value)
    };
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    };

    return (
        <section className="appointment-form">
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" value={title} onChange={handleTitleChange} required />
                <input name="contact" placeholder="Contact" value={contact} onChange={handleContactChange} required />
                <input name="date" placeholder="Date" value={date} onChange={handleDateChange} required />
                <input name="time" placeholder="Time" value={time} onChange={handleTimeChange} required />
                <button className="appointment-button">Submit</button>
            </form>
        </section>
    )
}