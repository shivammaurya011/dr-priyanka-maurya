import React from 'react';

const AppointmentList = () => {
  const appointments = [
    {
      doctorName: 'Dr. Ruby Perrin',
      speciality: 'Dental',
      patientName: 'Charlene Reed',
      appointmentTime: '9 Nov 2023, 11.00 AM - 11.15 AM',
      status: 'checkbox',
      amount: '$200.00',
    },
    {
      doctorName: 'Dr. Darren Elder',
      speciality: 'Dental',
      patientName: 'Travis Trimble',
      appointmentTime: '5 Nov 2023, 11.00 AM - 11.35 AM',
      status: 'checkbox',
      amount: '$300.00',
    },
    {
      doctorName: 'Dr. Deborah Angel',
      speciality: 'Cardiology',
      patientName: 'Carl Kelly',
      appointmentTime: '11 Nov 2023, 12.00 PM - 12.15 PM',
      status: 'checkbox',
      amount: '$150.00',
    },
    {
      doctorName: 'Dr. Sofia Brient',
      speciality: 'Urology',
      patientName: 'Michelle Fairfax',
      appointmentTime: '7 Nov 2023, 1.00 PM - 1.20 PM',
      status: 'checkbox',
      amount: '$150.00',
    },
    {
      doctorName: 'Dr. Marvin Campbell',
      speciality: 'Orthopaedics',
      patientName: 'Gina Moore',
      appointmentTime: '15 Nov 2023, 1.00 PM - 1.15 PM',
      status: 'checkbox',
      amount: '$200.00',
    },
    // Add more appointments as needed
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointment List</h2>
      <ul className="divide-y divide-gray-200">
        {appointments.map((appointment, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center mb-2">
              {/* User Image */}
              <img src="user_image_url" alt="User" className="w-8 h-8 rounded-full mr-2" />

              {/* Doctor Name */}
              <span className="font-bold">{appointment.doctorName}</span>
            </div>

            {/* Speciality */}
            <p className="text-sm mb-2">{appointment.speciality}</p>

            <div className="flex items-center mb-2">
              {/* User Image */}
              <img src="user_image_url" alt="User" className="w-8 h-8 rounded-full mr-2" />

              {/* Patient Name */}
              <span>{appointment.patientName}</span>
            </div>

            {/* Appointment Time */}
            <p className="text-sm mb-2">{appointment.appointmentTime}</p>

            {/* Status */}
            <input type="checkbox" checked={appointment.status} className="mr-2" />

            {/* Amount */}
            <span className="text-green-600 font-bold">{appointment.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
