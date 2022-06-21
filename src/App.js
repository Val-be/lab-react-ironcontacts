import "./App.css";
import React, { useState } from "react";
import contactList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));
  return (
    <div className="App">
      <button
        onClick={(e) => {
          e.preventDefault();
          const remainingContacts = contactList.filter(
            (contact) => !contacts.includes(contact)
          );
          const id = Math.floor(Math.random() * remainingContacts.length);
          setContacts([...contacts, remainingContacts[id]]);
        }}
      >
        Add Random Contact
      </button>
      <button
        onClick={() => {
          const contactToBeSorted = [...contacts];
          const sortedByName = contactToBeSorted.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          setContacts(sortedByName);
        }}
      >
        Sort by name
      </button>
      <button
        onClick={() => {
          const contactToBeSorted = [...contacts];
          const sortedByPopularity = contactToBeSorted.sort((a, b) => {
            if (a.popularity < b.popularity) {
              return 1;
            }
            if (a.popularity > b.popularity) {
              return -1;
            }
            return 0;
          });
          setContacts(sortedByPopularity);
        }}
      >
        Sort by popularity
      </button>
      <h2>Ironcontacts</h2>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((e, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={e.pictureUrl} className="picture" />
                </td>
                <td>{e.name}</td>
                <td>{e.popularity}</td>
                {e.wonOscar ? <td>🏆</td> : <td></td>}
                {e.wonEmmy ? <td>🏆</td> : <td></td>}
                <td>
                  <button
                    onClick={() => {
                      const newContacts = [...contacts];
                      newContacts.splice(i, 1);
                      setContacts(newContacts);
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// function randomContact() {
//   const remainingContacts = contacts.filter((contact) => {
//     return contactList.includes(contact);
//   });
//   const id = Math.random() * remainingContacts.length;
//   setContacts([...contactList, remainingContacts[id]]);
// }

export default App;
