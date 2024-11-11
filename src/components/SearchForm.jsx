// import React, { useState } from 'react';
// import "../index.css";

// export default function Component() {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-[#001428] to-[#00091a] flex items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-12 -mt-12"> {/* Moves content up and increases vertical spacing */}
//         <div className="text-center ml-[60px]">
//           <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
//             ENTER DETAILS
//           </h1>
//         </div>


//         <form className="space-y-8 "> {/* Increases spacing between form elements */}
//           <div className="space-y-8 m-8" >
//             <div className="flex items-center space-x-4">
//               <label htmlFor="fullName" className="text-white w-1/3 text-sm">
//                 Full Name*
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2"
//               />
//             </div>

//             <div className="flex items-center space-x-4">
//               <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
//                 Personal Number*
//               </label>
//               <input
//                 type="text"
//                 id="personalNumber"
//                 className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2"
//               />
//             </div>
//           </div>

//           <div className="flex justify-center mr-[20px]"> {/* Moves button to align with inputs */}
//             <button
//               type="submit"
//               className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
//             >
//               SUBMIT
//             </button>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from 'react';
// import "../index.css";

// export default function Component() {
//   const [showForm, setShowForm] = useState(false); // State to toggle form visibility
//   const [role, setRole] = useState(''); // State to store the selected role (Employee or Vendor)


//   // Function to handle the button click and show the form
//   const handleButtonClick = (role) => {
//     setRole(role); // Set the selected role (Employee or Vendor)
//     setShowForm(true); // Show the form
//   };


//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-[#001428] to-[#00091a] flex items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-12 -mt-12">
//         {/* Initially showing Employee and Vendor buttons */}
//         {!showForm && (
//           <div className="space-y-8 m-4">



//             <div className="flex flex-col gap-10 justify-center items-center">
//               <button
//                 onClick={() => handleButtonClick('Employee')}
//                 className=""
//                 style={{
//                   backgroundImage: 'url(../employee.png)', // Replace with your actual image path
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   height: '60px',
//                   width: '80%',
//                   border: 'none',
//                 }}
//               >
//               </button>
//               <button
//                 onClick={() => handleButtonClick('Vendor')}
//                 className=""
//                 style={{
//                   backgroundImage: 'url(../vendor.png)', // Replace with your actual image path
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   height: '60px',
//                   width: '80%',
//                   border: 'none',
//                 }}
//               >
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Form is displayed when showForm is true */}
//         {showForm && (
//           <div>
//             <div className="text-center ml-[60px]">
//               <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
//                 ENTER DETAILS
//               </h1>
//             </div>

//             <form className="space-y-8">
//               <div className="space-y-8 m-8">
//                 <div className="flex items-center space-x-4">
//                   <label htmlFor="fullName" className="text-white w-1/3 text-sm">
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     placeholder="Enter Name"
//                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
//                   />
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
//                     {role === 'Employee' ? 'Employee Code*' : 'Vendor Code*'}
//                   </label>
//                   <input
//                     type="text"
//                     id="personalNumber"
//                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
//                     placeholder={role === 'Employee' ? 'Enter Employee Code' : 'Enter Vendor Code'}
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-center mr-[20px]">
//                 <button
//                   type="submit"
//                   className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






// import React, { useState } from 'react';
// import axios from 'axios'; // We need axios to make HTTP requests
// import "../index.css";

// export default function Component() {
//   const [showForm, setShowForm] = useState(false); // State to toggle form visibility
//   const [role, setRole] = useState(''); // State to store the selected role (Employee or Vendor)
//   const [code, setCode] = useState(''); // State to store the entered code
//   const [fullName, setFullName] = useState(''); // State to store full name
//   const [message, setMessage] = useState(''); // State to display the result message

//   // Function to handle the button click and show the form
//   const handleButtonClick = (role) => {
//     setRole(role); // Set the selected role (Employee or Vendor)
//     setShowForm(true); // Show the form
//   };

//   // Function to handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request to the backend API to verify the code
//       const response = await axios.post('http://localhost:5000/verify-code', {
//         role,
//         code
//       });

//       if (response.data.success) {
//         setMessage('Code verified successfully!');
//       } else {
//         setMessage('Invalid code');
//       }
//     } catch (error) {
//       setMessage('Error occurred while verifying the code');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-[#001428] to-[#00091a] flex items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-12 -mt-12">
//         {/* Initially showing Employee and Vendor buttons */}
//         {!showForm && (
//           <div className="space-y-8 m-4">
//             <div className="flex flex-col gap-10 justify-center items-center">
//               <button
//                 onClick={() => handleButtonClick('Employee')}
//                 className=""
//                 style={{
//                   backgroundImage: 'url(../employee.png)', // Replace with your actual image path
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   height: '60px',
//                   width: '80%',
//                   border: 'none',
//                 }}
//               >
//               </button>
//               <button
//                 onClick={() => handleButtonClick('Vendor')}
//                 className=""
//                 style={{
//                   backgroundImage: 'url(../vendor.png)', // Replace with your actual image path
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   height: '60px',
//                   width: '80%',
//                   border: 'none',
//                 }}
//               >
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Form is displayed when showForm is true */}
//         {showForm && (
//           <div>
//             <div className="text-center ml-[60px]">
//               <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
//                 ENTER DETAILS
//               </h1>
//             </div>

//             <form className="space-y-8" onSubmit={handleFormSubmit}>
//               <div className="space-y-8 m-8">
//                 <div className="flex items-center space-x-4">
//                   <label htmlFor="fullName" className="text-white w-1/3 text-sm">
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Enter Name"
//                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
//                   />
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
//                     {role === 'Employee' ? 'Employee Code*' : 'Vendor Code*'}
//                   </label>
//                   <input
//                     type="text"
//                     id="personalNumber"
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
//                     placeholder={role === 'Employee' ? 'Enter Employee Code' : 'Enter Vendor Code'}
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-center mr-[20px]">
//                 <button
//                   type="submit"
//                   className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>

//             {/* Display the verification message */}
//             {message && (
//               <div className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
//                 <p>{message}</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios'; // We need axios to make HTTP requests
import "../index.css";
import { useNavigate } from 'react-router-dom'; 

const SearchForm = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [role, setRole] = useState(''); // State to store the selected role (Employee or Vendor)
  const [code, setCode] = useState(''); // State to store the entered code
  const [fullName, setFullName] = useState(''); // State to store full name
  const [message, setMessage] = useState(''); // State to display the result message
  const [seatNumber, setSeatNumber] = useState(''); // State to store the allocated seat number
  const [isAttended, setIsAttended] = useState(false); // State to store the attendance status
  const navigate = useNavigate();



  // Function to handle the button click and show the form
  const handleButtonClick = (role) => {
    setRole(role); // Set the selected role (Employee or Vendor)
    setShowForm(true); // Show the form
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); 
  
    // Use the state variables directly
    const formData = {
      role: role, 
      code: code,
      fullName: fullName
    };
    console.log("Form data:", formData);
  
    try {
      const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-code', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.data.success) {
        setSeatNumber(response.data.seatNumber);
        setIsAttended(response.data.isAttended);
        setMessage('Code verified successfully!');
  
        // Navigate to the seating arrangement page
        navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
      } else {
        setMessage('Invalid code');
      }
    } catch (error) {
      setMessage('Error occurred while verifying the code');
      console.error(error);
    }
  };
  
  return (
    <div className="min-h-screen w-full  flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-12 -mt-12">
        {/* Initially showing Employee and Vendor buttons */}
        {!showForm && (
          <div className="space-y-8 m-4">
            <div className="flex flex-col gap-10 justify-center items-center">
              <button
                onClick={() => handleButtonClick('Employee')}
                className=""
                style={{
                  backgroundImage: 'url(../employee.png)', // Replace with your actual image path
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '60px',
                  width: '80%',
                  border: 'none',
                }}
              >
              </button>
              <button
                onClick={() => handleButtonClick('Vendor')}
                className=""
                style={{
                  backgroundImage: 'url(../vendor.png)', // Replace with your actual image path
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '60px',
                  width: '80%',
                  border: 'none',
                }}
              >
              </button>
            </div>
          </div>
        )}

        {/* Form is displayed when showForm is true */}
        {showForm && (
          <div>
            <div className="text-center ml-[60px]">
              <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
                ENTER DETAILS
              </h1>
            </div>

            <form className="space-y-8" onSubmit={handleFormSubmit}>
              <div className="space-y-8 m-8">
                <div className="flex items-center space-x-4">
                  <label htmlFor="fullName" className="text-white w-1/3 text-sm">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter Name"
                    className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
                    {role === 'Employee' ? 'Employee Code*' : 'Vendor Code*'}
                  </label>
                  <input
                    type="text"
                    id="personalNumber"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
                    placeholder={role === 'Employee' ? 'Enter Employee Code' : 'Enter Vendor Code'}
                  />
                </div>
              </div>

              <div className="flex justify-center mr-[20px]">
                <button
                  type="submit"
                  className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>

            {/* Display the verification message */}
            {message && (
              <div className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                <p>{message}</p>
              </div>
            )}

            {/* Display seat number if successfully verified */}
            {seatNumber && (
              <div className="text-center mt-4">
                <p className="text-lg font-semibold text-white">Your Allocated Seat Number:</p>
                <p className="text-xl text-yellow-400">{seatNumber}</p>
                <p className={`text-sm ${isAttended ? 'text-green-500' : 'text-red-500'}`}>
                  Attendance Status: {isAttended ? 'Attended' : 'Not Attended'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


export default SearchForm;