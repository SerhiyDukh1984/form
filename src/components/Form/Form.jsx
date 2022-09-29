import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Form = ({ addContact }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'firstName') {
      setFirstName(value);
    }
    if (name === 'lastName') {
      setLastName(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      id: nanoid(),
    });

    reset();
  };

  const reset = () => {
    setFirstName('');
    setLastName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label title="firstName">
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={handleChange}
        />
      </label>

      <label title="lastName">
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          onChange={handleChange}
        />
      </label>

      <label title="phone">
        <input
          type="text"
          name="phone"
          placeholder="phone"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
};
