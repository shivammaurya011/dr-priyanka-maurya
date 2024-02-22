import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CommingSoonPage from '../pages/CommingSoonPage';
import ErrorPage from '../pages/ErrorPage';
import PatientPage from '../pages/PatientPage';
import DoctorPage from '../pages/DoctorPage';
import AdminPage from '../pages/AdminPage';

function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/patient' element={<PatientPage />} />
        <Route path='/doctor' element={<DoctorPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path="/comingsoon" element={<CommingSoonPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default MainRoute
