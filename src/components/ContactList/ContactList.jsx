export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.firstName} {contact.lastName}: {contact.phone}
        </li>
      ))}
    </ul>
  );
};
