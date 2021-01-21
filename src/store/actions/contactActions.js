import * as actions from "./actionTypes";

// Add a contact
export const addContact = (data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_CONTACT_START });
  try {
    const res = await firestore.collection("contacts").doc(userId).get();
    const newContact = {
      id: new Date().valueOf(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      streetAddress1: data.streetAddress1,
      streetAddress2: data.streetAddress2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      officePhone: data.officePhone,
      cellPhone: data.cellPhone,
      fax: data.fax,
      company: data.company,
      title: data.title,
      website: data.website,
      backofCard: data.backofCard,
    };
    if (!res.data()) {
      console.log("got here");
      firestore
        .collection("contacts")
        .doc(userId)
        .set({
          contacts: [newContact],
        });
    } else {
      firestore
        .collection("contacts")
        .doc(userId)
        .update({
          contacts: [...res.data().contacts, newContact],
        });
    }
    dispatch({ type: actions.ADD_CONTACT_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_CONTACT_FAIL, payload: err.message });
  }
};

// Delete contact
export const deleteContact = (id) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.DELETE_CONTACT_START });
  try {
    const res = await firestore.collection("contacts").doc(userId).get();
    const previousContacts = res.data().contacts;
    const newContacts = previousContacts.filter((contact) => contact.id !== id);
    await firestore.collection("contacts").doc(userId).update({
      contacts: newContacts,
    });
    dispatch({ type: actions.DELETE_CONTACT_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.DELETE_CONTACT_FAIL, payload: err.message });
  }
};

// edit contact
export const editContact = (id, data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_CONTACT_START });
  try {
    const res = await firestore.collection("contacts").doc(userId).get();
    const contacts = res.data().contacts;
    const index = contacts.findIndex((contact) => contact.id === id);
    contacts[index].contact = data.contact;

    await firestore.collection("contacts").doc(userId).update({
      contacts,
    });
    dispatch({ type: actions.ADD_CONTACT_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_CONTACT_FAIL, payload: err.message });
  }
};
