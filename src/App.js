//import routers
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Root, { ROUTES } from './components/Root/Root.js';
import { AppointmentsPage } from './containers/AppointmentsPage/AppointmentsPage.js';
import { ContactsPage } from './containers/ContactsPage/ContactsPage.js';

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  
  //define state variables for contacts and appointments
  //functions to add contacts and appointments
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root /> }>
      <Route index element={ <Navigate to={ ROUTES.CONTACTS } replace /> } />
      <Route path={ ROUTES.CONTACTS } element={ <ContactsPage contacts={contacts} setContacts={setContacts} /> } />
      <Route path={ ROUTES.APPOINTMENTS } element={ <AppointmentsPage appointments={appointments} contacts={contacts} setAppointments={setAppointments} /> } />
    </Route>
  ));

  return (
    <RouterProvider router={ router } />
  );
}

export default App;
