import ContactCardComponent from "./ContactCardComponent";

const ContactList = [
  {
    id: 1,
    name: "John Doe",
    adress: "123 Main St, Springfield, USA",
    phone: "1234567890",
    email: "JohnDoe@example.com",
    url: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Bill Smith",
    adress: "456 Elm St, Springfield, USA",
    phone: "0987654321",
    email: "thisisandgmail@outlook.com",
    url: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Gordo Freeman",
    adress: "789 Oak St, Springfield, USA",
    phone: "1122334455",
    email: "FreeGordo@hotmail.com",
    url: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Deer Hunter",
    adress: "321 Pine St, Springfield, USA",
    phone: "5566778899",
    email: "HunterxHunter@yahoo.com",
    url: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ContactComponent() {
  return (
    <div className="container">
      {ContactList.map((person) => (
        <ContactCardComponent key={person.id} Contact={person} />
      ))}
    </div>
  );
}
