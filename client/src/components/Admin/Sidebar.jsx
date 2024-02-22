import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAnalytics, IoMdCalendar, IoMdMedkit, IoMdPeople, IoMdPerson, IoMdCash } from 'react-icons/io';

const Sidebar = () => {
  return (
    <nav className="bg-blue-800 w-64">
      <div className="mt-10">
        <Link
          to="/admin/dashboard"
          className="flex items-center mt-4 py-2 px-6 hover:bg-blue-700 text-gray-100"
        >
          <IoMdAnalytics className="mr-2" />
          Dashboard
        </Link>

        <Link
          to="/appointments"
          className="flex items-center mt-4 py-2 px-6 hover:bg-blue-700 text-gray-100"
        >
          <IoMdCalendar className="mr-2" />
          Appointments
        </Link>

        <Link
          to="/specialities"
          className="flex items-center mt-4 py-2 px-6 hover:bg-blue-700 text-gray-100"
        >
          <IoMdMedkit className="mr-2" />
          Specialities
        </Link>

        <Link
          to="/doctors"
          className="flex items-center mt-4 py-2 px-6 hover:bg-blue-700 text-gray-100"
        >
          <IoMdPeople className="mr-2" />
          Doctors
        </Link>

        <Link
          to="/patient"
          className="flex items-center mt-4 py-2 px-6 hover:bg-blue-700 text-gray-100"
        >
          <IoMdPerson className="mr-2" />
          Patient
        </Link>

        <Link
          to="/transactions"
          className="flex items-center mt-4 py-2 px-6 hover:bg-blue-700 text-gray-100"
        >
          <IoMdCash className="mr-2" />
          Transactions
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
