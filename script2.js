function addContact(){

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let email =
    document.getElementById("email").value;

    if(name==="" || phone==="" || email===""){

        alert("Fill all fields");
        return;
    }

    let contact = {
        name:name,
        phone:phone,
        email:email
    };

    contacts.push(contact);

    saveContacts();

    displayContacts();

    clearFields();
}