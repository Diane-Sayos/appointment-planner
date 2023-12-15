


const ContactForm =({name, setName, phone, setPhone, email, setEmail, handleSubmit}) => {

    const handleNameChange = (e) => {
        setName(e.target.value)
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    return (
        <section className="contact-form">
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={name} onChange={handleNameChange}required />
                <input name="phone" placeholder="Phone Number" value={phone} onChange={handlePhoneChange} required />
                <input name="email" placeholder="email" value={email} onChange={handleEmailChange} required />
                <button className="contact-button">Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;