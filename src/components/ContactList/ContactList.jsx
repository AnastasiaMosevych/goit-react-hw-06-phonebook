import { Container, ContactsList } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import ContactListItem from "./ListItem";

const ContactList = () => {
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const filterContacts = (contacts, filter) => {
        let filteredContacts = [];
        contacts.forEach((contact) => {
            if (filter === "" || contact.name.toLowerCase().includes(filter.toLowerCase())) {
                filteredContacts.push(contact);
            }
        })
        return filteredContacts;
    }
    return (<Container>
            <ContactsList>
                {contacts && filterContacts(contacts, filter).map((contact) => {
                   return <ContactListItem key={ contact.id } contact={contact} />
                })}
            </ContactsList>
        </Container>)
}

export default ContactList;
