


const ContactForm =({name, setName, phone, setPhone, email, setEmail, handleSubmit}) => {

    return (
        <section className="contact-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Contact Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        aria-label="Contact Name"
                    />
                </label>
                <label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Contact Phone (###-###-####)"
                        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        aria-label="Contact Phone"
                    />
                </label>
                <label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-label="Contact Email"
                    />
                </label>
                <input type="submit" value="Add Contact" aria-label="Add Contact" />
            </form>
        </section>
    )
};

export default ContactForm;