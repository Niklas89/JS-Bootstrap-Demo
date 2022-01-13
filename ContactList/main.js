const contactListRow = document.getElementById("contactListRow");
contactListRow.hidden = true;
const viewContactsButton = document.getElementById("viewContactsButton");
const formAddContact = document.getElementById("formAddContact");
formAddContact.hidden = true;
const createContactButton = document.getElementById("createContactButton");
const blankPageButton = document.getElementById("blankPageButton");

const body = document.querySelector('body');
const tbody = document.querySelector("tbody");
const tbodytr = tbody.querySelector("tr");
const table = document.querySelector('table');

let flexRadio = document.getElementsByName('flexRadioDefault');
let inputFirstname = document.getElementById("inputFirstname");
let inputLastname = document.getElementById("inputLastname");
let inputEmail = document.getElementById("inputEmail4");
let inputPhone = document.getElementById("inputPhone");
let inputAddress = document.getElementById("inputAddress");

// Show pop-up notification at each delete or adding a contact
/*const toastAddContact = document.getElementById('toastAddContact');
const toastAdd = new bootstrap.Toast(toastAddContact);
const toastDelete = new bootstrap.Toast(toastDeleteContact); 
const toastDefault = document.getElementById('toastDefault');
const toast = new bootstrap.Toast(toastDefault); */
const toastDefault = document.getElementById('toastDefault');
const toast = new bootstrap.Toast(toastDefault);



// if the button "Afficher contacts" has been clicked on, display the contact list
viewContactsButton.addEventListener('click', (event) => { 
    if(contactListRow.hidden) {
        contactListRow.hidden = false;
        viewContactsButton.style.backgroundColor = "grey";
    } else {
        contactListRow.hidden = true;
        viewContactsButton.style.backgroundColor = "blue";
    }
});

// if the button "Créer un contact" has been clicked on, display the create contact form
createContactButton.addEventListener('click', (event) => { 
    if(formAddContact.hidden) {
        formAddContact.hidden = false;
        createContactButton.style.backgroundColor = "grey";
    } else {
        formAddContact.hidden = true;
        createContactButton.style.backgroundColor = "blue";
    }
});

// if the button "Page blanche" has been clicked on, hide the contact list and the create contact form
blankPageButton.addEventListener('click', (event) => { 
    if(!formAddContact.hidden && !contactListRow.hidden) {
        formAddContact.hidden = true;
        createContactButton.style.backgroundColor = "blue";
        contactListRow.hidden = true;
        viewContactsButton.style.backgroundColor = "blue";
    } else if(!formAddContact.hidden) {
        formAddContact.hidden = true;
        createContactButton.style.backgroundColor = "blue";
    } else if(!contactListRow.hidden) {
        contactListRow.hidden = true;
        viewContactsButton.style.backgroundColor = "blue";
    }
});


class Contact {
    constructor(gender, firstname, lastname, email, phone, address, contactId) {
      this.gender = gender;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.contactId = contactId;
    }

  }
/*
const nik = new Contact('Monsieur', 'Nik', 'Ed', 'nik.ed@gmail.com', '071234312', '40 rue de Pompidou, 75001 Paris', '1641979165790');
const jules = new Contact('Monsieur', 'Jules', 'Dupont', 'jules.dupont@gmail.com', '06235412', '19 av de Elysees, 75007 Paris', '1641979165791');
const clara = new Contact('Madame', 'Clara', 'Depho', 'clara.depho@gmail.com', '05129012', '2 rue de Lamanu, 75013 Paris', '1641979165792');

const contacts = [nik, jules, clara]; */
const contacts = [];


const generateComponent = (contact) => {
  const genderText = contact.gender;
  const firstnameText = contact.firstname;
  const lastnameText = contact.lastname;
  const emailText = contact.email;
  const phoneText = contact.phone;
  const addressText = contact.address;
  const contactIdText = contact.contactId;
  return {
    genderText,
    firstnameText,
    lastnameText,
    emailText,
    phoneText,
    addressText,
    contactIdText
  };
}

/*
const nikComponent = generateComponent(nik);
const julesComponent = generateComponent(jules);
const claraComponent = generateComponent(clara);


const contactComponents = [nikComponent, julesComponent, claraComponent]; */

const contactComponents = [];

document.getElementById("formAddContact").addEventListener("submit", function(evt){
    evt.preventDefault(); 
    addContact();
});

document.addEventListener('DOMContentLoaded', () => {

  let contact = JSON.parse(localStorage.getItem('contact'))
  console.log(contact)
  addContactLocalStorage(contact);

})

const addContactLocalStorage = (contact) => {
  contacts.push(contact);
  let newContactLocalStorage= generateComponent(contact);
  contactComponents.push(newContactLocalStorage);
  viewContacts();
};

const addContact = () => {
  let genderRadio;
  for(let i = 0; i < flexRadio.length; i++) {
    if(flexRadio[i].checked) { 
      console.log("Gender: "+flexRadio[i].value);
      genderRadio = flexRadio[i].value;
    }
  }
  console.log(inputFirstname.value);
  console.log(inputLastname.value);
  console.log(inputEmail.value);
  console.log(inputPhone.value);
  if(!isTelephonePortable(inputPhone.value)) {
    fieldUnvalid("phone");
    return;
  }
  console.log(inputAddress.value);
  const newContact = new Contact(genderRadio, inputFirstname.value, inputLastname.value, inputEmail.value, inputPhone.value, inputAddress.value, Date.now());
  // use localstorage to save the details in the browser
  // les deux premieres lignes en commentaire ci-dessous pour ajouter plusieurs contacts
  // le || retourn la premiere valeur vraie, tableau vide ou le localstorage item
 let tabContact = JSON.parse(localStorage.getItem('contact')) || [];
 // autre méthode de faire pour checker si tableau est vide, supprimer || [] audessus et faire:
    /* if(tabContact == null) {
      tabContact = [];
    } */
  tabContact.push(newContact); 
  localStorage.setItem('contact', JSON.stringify(tabContact))
  contacts.push(newContact);
  const newContactComponent = generateComponent(newContact);
  contactComponents.push(newContactComponent);
  viewContacts();
  showToast("add"); // Show pop-up notification at each adding of a contact
};


const fieldUnvalid = (value) => {
  if(value == "phone") {
    document.getElementById("inputPhone").style.border = "1px solid red";
  }
};

const viewContacts = () => {
  // before viewing contacts I need to delete them
    removeContacts();

    for (let contact of contactComponents) {
      const tableRow = document.createElement('tr');
      /*const tdArray = [];
      for(let i=0;i<6;i++) {
        tdArray.push(document.createElement('td'));
      }
      for(let td of tdArray) {
        td.innerText = contact...
      } */
      const tableColumnGender =  document.createElement('td');
      tableColumnGender.innerText = contact.genderText;
      const tableColumnFirstname =  document.createElement('td');
      tableColumnFirstname.innerText = contact.firstnameText;
      const tableColumnLastname =  document.createElement('td');
      tableColumnLastname.innerText = contact.lastnameText;
      const tableColumnEmail =  document.createElement('td');
      tableColumnEmail.innerText = contact.emailText;
      const tableColumnPhone =  document.createElement('td');
      tableColumnPhone.innerText = contact.phoneText;
      const tableColumnAddress =  document.createElement('td');
      tableColumnAddress.innerText = contact.addressText;
      const tableColumnContactId =  document.createElement('td');
      tableColumnContactId.innerHTML = '<button type="button" class="btn btn-outline-danger btn-sm" id="'+contact.contactIdText+'">Supprimer</button>';
      tableRow.append(tableColumnGender, tableColumnLastname, tableColumnFirstname, tableColumnPhone,  tableColumnAddress, tableColumnEmail, tableColumnContactId);
      tbody.append(tableRow); 
    }
    const deleteButtons = table.querySelectorAll('.btn-outline-danger');  
    deleteButtons.forEach(el => el.addEventListener('click', event => {
        //console.log(event.target.getAttribute("id")); 
        deleteButton(event.target.getAttribute("id"));
        
      }));
  };


const deleteButton = (id) => {
    let i = 0;
    for (let contact of contactComponents) {
      if(id == contact.contactIdText) {
        console.log("delete: "+contact.contactIdText);
        contactComponents.splice(i, 1);
        //localStorage.removeItem('contact');
        //localStorage.setItem('contact', JSON.stringify(contactComponents))
      }
      i++;
    }
    showToast("delete"); // Show pop-up notification at each deleting of a contact
    removeContacts();
    viewContacts();
};


const removeContacts = () => {
  const children = [];
  for (let childNode of tbody.childNodes) {
    children.push(childNode);
  }
  for (let child of children) {
    console.log(child.tagName);
    if (child.tagName == 'TR') {
      tbody.removeChild(child);
    }
  }
}

const showToast = (toastReason) => {
  //let toastClass = document.getElementById("toastDefault").getAttribute("class");
  if(toastReason == "delete") {
    //document.getElementById("toastDefault").setAttribute("class", " bg-danger "+toastClass);
    document.getElementById("toastTitle").innerText = "Suppression de contact";
    document.getElementById("toastBody").innerText = "Le contact a bien été supprimé !";
    toast.show()
  } else if(toastReason == "add") {
    //document.getElementById("toastDefault").setAttribute("class", "bg-primary "+toastClass);
    document.getElementById("toastTitle").innerText = "Ajout de contact";
    document.getElementById("toastBody").innerText = "Le contact a bien été ajouté !";
    toast.show()
  }
}

const isTelephonePortable = (numero) => {
	console.log('numéro : '+numero);
	let reg_telephone_portable = '^(06|07)[0-9]{8}$';
	if( numero.match(reg_telephone_portable) ){
		return true;
	} else {
		return false;
	}
}

/*

document.addEventListener('DOMContentLoaded', () => {

  emptyResultDiv(); // pour vider par défaut

  document.addEventListener('click', event => {

    if(event.target.matches('#displaymachin')) {
        displayContentList();
        displaySection('block', 'none');
    }

    if(event.target.matches('#displaymachin1')) {
      displayFormAdd();
  }

  if(event.target.matches('#displaymachin2')) {
    emptyResultDiv();
}

  })

})

function displaySection(containsList = 'none', contactAdd = 'none') {
  document.querySelector('#contactlist').style.display = containsList;
  document.querySelector('#contactladd').style.display = contactAdd;
}


function displayContentList() {
  document.querySelector('#contactlist').style.display = 'block';
  document.querySelector('#contactladd').style.display = 'none';
}

function displayFormAdd() {
  document.querySelector('#contactlist').style.display = 'none';
  document.querySelector('#contactladd').style.display = 'block';
}

function emptyResultDiv() {
  document.querySelector('#contactlist').style.display = 'none';
  document.querySelector('#contactladd').style.display = 'none';
}
*/

  // autre facon pour le deleteButtons: faire un event listener en click sur le document qui renvoie à une fonction qui fait event target matches pour voir si cest égale à la classe ou l'id du bouton
/*
    const deleteButtons = tbody.getElementsByTagName('button');
  const deleteButton = function() {     
    const attribute = this.getAttribute("id");     
    alert(attribute); 
  }; 
    for (var i = 0; i < deleteButtons.length; i++) {     
      deleteButtons[i].addEventListener('click', deleteButton, false); 
    } 

  
  deleteButton.addEventListener('click', () => {
    console.log("DELETED !");
  }) */

  
