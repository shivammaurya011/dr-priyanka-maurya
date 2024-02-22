import { Route, Routes } from 'react-router-dom';
import AppointmentList from '../components/Admin/AppointmentList';
import Sidebar from '../components/Admin/Sidebar';
import React from 'react';
import Dashboard from '../components/Admin/Dashboard';

const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100 mt-12">
      <Sidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <Routes>
                <Route path='/admin/dashboard' element={<Dashboard/>}/>
                <Route path='/admin/' element={</>}/>
                <Route path='/admin/' element={</>}/>
                <Route path='/admin/' element={</>}/>
                <Route path='/admin/' element={</>}/>
            </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
