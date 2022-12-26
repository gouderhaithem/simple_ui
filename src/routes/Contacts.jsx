import React from "react";
import ContactIcon from "../components/ContactIcon";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
function Contacts() {
  const { new_contacts, setNew_contacts, contacts, setContacts } =
    useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [searchBy, setSearchBy] = useState({
    name: true,
    email: false,
    phone_number: false,
  });
  function addContact(e) {
    e.preventDefault();
    setContacts((old) => [...old, contactInfo]);
    setContactInfo({
      name: "",
      email: "",
      phone_number: "",
    });
  }
  function checkSearch(person) {
    // you can add checkbox inputs {search by name or email ...}
    //NOTE: like this => if namecheck && String(person.name).toLowerCase().includes(String(searchInput).toLowerCase()) => return person
    if (
      String(person.name.trim())
        .toLowerCase()
        .includes(String(searchInput.trim()).toLowerCase()) ||
      String(person.phone_number.trim())
        .toLowerCase()
        .includes(String(searchInput.trim()).toLowerCase()) ||
      String(person.email.trim())
        .toLowerCase()
        .includes(String(searchInput.trim()).toLowerCase())
    ) {
      return true;
    }
  }
  useEffect(() => {
    let newArr = contacts?.filter((person) => {
      if (checkSearch(person)) {
        return { ...person };
      }
    });
    setNew_contacts(newArr);
  }, [searchInput, contacts]);
  return (
    <>
      Search contacts
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <p>Add contact</p>
      Name
      <form onSubmit={addContact}>
        <input
          type={"text"}
          required
          value={contactInfo.name}
          onChange={(e) => {
            setContactInfo((old) => ({ ...old, name: e.target.value }));
          }}
        />
        Phone number
        <input
          type={"text"}
          required
          value={contactInfo.phone_number}
          onChange={(e) => {
            setContactInfo((old) => ({ ...old, phone_number: e.target.value }));
          }}
        />
        Email{" "}
        <input
          type={"email"}
          required
          value={contactInfo.email}
          onChange={(e) => {
            setContactInfo((old) => ({ ...old, email: e.target.value }));
          }}
        />
        <button type="submit">add contacts</button>
      </form>
      <section className="cards">
        {new_contacts?.map((person) => (
          <ContactIcon
            name={person.name}
            email={person.email}
            phone_number={person.phone_number}
            key={Math.random()}
            searchInput={searchInput}
          />
        ))}
      </section>
    </>
  );
}
export default Contacts;
// NOTE: getch() <=> fetch()
