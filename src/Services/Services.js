export const GetAllContacts =() =>{
    return fetch("https://playground.4geeks.com/contact/agendas/Luper95/contacts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
      return response.json();
    })
    .catch((error) => console.error("Error fetching user:", error));
};

export const CreateNewAgenda = ()=>{
    return fetch("https://playground.4geeks.com/contact/agendas/Luper95")
    .then((response) =>{
        if (response.ok){
            console.log("Agenda already existst");
            return GetAllContacts();
        }
        if (response.status === 404) {
            //crear nueva agenda
            return fetch("https://playground.4geeks.com/contact/agendas/Luper95", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([]) // Enviar un arreglo vacío para crear una nueva agenda
            }).then(()=>{
                console.log("Agenda created successfully");
                return GetAllContacts();
            })
        }
    })
}

export const AddNewContact = (contact) =>{
    
    return fetch("https://playground.4geeks.com/contact/agendas/Luper95/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    .then((response) => {
        if (!response.ok) {
           
            throw new Error("no pude cargar el contacto");
        }
        return response.json();
    })
    .catch((error) => console.error("Error adding contact:", error));
}
export const DeleteContact = (id) =>{
    return fetch(`https://playground.4geeks.com/contact/agendas/Luper95/contacts/${id}`, {
        method: "DELETE"
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return; })
    .catch((error) => console.error("Error deleting contact:", error));
}
export const UpdateContact = (contact) =>{
    return fetch(`https://playground.4geeks.com/contact/agendas/Luper95/contacts/${contact.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => console.error("Error updating contact:", error));
}