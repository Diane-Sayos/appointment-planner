//select in form to choose which contact for the appointment form

const ContactPicker = ({ name, value, contacts, onChange}) => {
    return (
        <select aria-label="Contact Picker" value={value} name={name} onChange={onChange}>
            <option value="" key={-1}>
                No Contact Selected
            </option>
            {contacts.map((contact) => {
                return (
                    <option value={contact} key={contact}>{contact}</option>
                );
            })};
        </select>
    );
};

export default ContactPicker;