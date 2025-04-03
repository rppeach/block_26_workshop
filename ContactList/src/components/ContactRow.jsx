function ContactRow ({contact, selectContact}){
    console.log(contact)
    return (
        <tr onClick={()=>{
          return(selectContact(contact))
        }}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      );
}

export default ContactRow