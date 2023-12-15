//import routers
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Root, { ROUTES } from './components/Root/Root.js';
import AppointmentsPage from './containers/AppointmentsPage/AppointmentsPage.js';
import ContactsPage from './containers/ContactsPage/ContactsPage.js';

import { useState } from 'react';
import './App.css';

function App() {
    //define state variables for contacts and appointments
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  //functions to add contacts and appointments
  const addAppointment = (name, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        name: name,
        contact: contact,
        date: date,
        time: time
      },
    ]);
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email
      },
    ]);
  };


  //define router
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root /> }>
      <Route index element={ <Navigate to={ ROUTES.CONTACTS } replace /> } />
      <Route path={ ROUTES.CONTACTS } element={ <ContactsPage contacts={contacts} addContact={addContact}/> } />
      <Route path={ ROUTES.APPOINTMENTS } element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} /> } />
    </Route>
  ));

  return (
    <RouterProvider router={ router } />
  );
}

export default App;
