import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

function ContactList (){
    
    const [contacts, setContacts] = useState(dummyContacts)
    const [selectedContact, selectContact] = useState()

    useEffect(() => {
      async function fetchContacts() {
        try {
          const res = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
          const data = await res.json()
          console.log(data)
          // your fetch logic will go here
          setContacts(data)
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts()
    }, []);
    
    // console.log("Contacts:", contacts)


    return ( 
        <>
        { selectedContact?
        <div>
          <span>
          <h3>Contact Details</h3>
          <button onClick={()=>{selectContact(null)}}>Go Back</button>
          </span>

          <h1>{selectedContact.name}</h1>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
          <p>Username: {selectedContact.username}</p>
          <p>Website: {selectedContact.website}</p>
          <br />
          <h3>Location</h3>
          <p>{selectedContact.address.street}, {selectedContact.address.city} {selectedContact.address.zipcode}</p>
          <p>{selectedContact.address.suite}</p>
          <p></p>
          <p></p>
          <p>Coordinates: "{selectedContact.address.geo.lat}" . "{selectedContact.address.geo.lng}"</p>
          <br />
          <h3>Professional Info</h3>
          <p>{selectedContact.company.bs}</p>
          <p>Company: {selectedContact.company.name}</p>
          <p>Catch Phrase: {selectedContact.company.catchPhrase}</p>
        </div>
          :
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} selectContact={selectContact}/>;
        })}
          </tbody>
        </table>
        }
        </>
    ); 
}

export default ContactList