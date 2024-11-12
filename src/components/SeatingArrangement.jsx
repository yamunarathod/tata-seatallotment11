// // // // SeatingArrangement.js
// // // import React from 'react';
// // // import Seat from './Seat';

// // // const SeatingArrangement = () => {
// // //   const rows = Array.from({ length: 12 }, (_, i) => i + 1);

// // //   const renderSeats = (rowNumber) => {
// // //     const isOddRow = rowNumber % 2 !== 0;
// // //     const seatCount = isOddRow ? 8 : 6;
// // //     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
// // //     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

// // //     return (
// // //       <div style={styles.row}>
// // //         <div style={styles.side}>
// // //           {leftSeats.map((num) => (
// // //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// // //           ))}
// // //         </div>
// // //         <div style={styles.space}></div>
// // //         <div style={styles.side}>
// // //           {rightSeats.map((num) => (
// // //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       {rows.map((rowNumber) => (
// // //         <div key={rowNumber} style={styles.rowContainer}>
// // //           {renderSeats(rowNumber)}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: '20px',
// // //   },
// // //   rowContainer: {
// // //     marginBottom: '15px',
// // //   },
// // //   row: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //   },
// // //   side: {
// // //     display: 'flex',
// // //     gap: '10px',
// // //   },
// // //   space: {
// // //     width: '40px', // space between left and right seats
// // //   },
// // // };

// // // export default SeatingArrangement;


// // import React from 'react';
// // import Seat from './Seat';

// // const SeatingArrangement = () => {
// //   const rows = Array.from({ length: 12 }, (_, i) => i + 1);

// //   const renderSeats = (rowNumber) => {
// //     const isOddRow = rowNumber % 2 !== 0;
// //     const seatCount = isOddRow ? 8 : 6;
// //     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
// //     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

// //     // Set extra space width for even rows
// //     const spaceWidth = isOddRow ? '40px' : '100px';

// //     return (
// //       <div style={styles.row}>
// //         <div style={styles.side}>
// //           {leftSeats.map((num) => (
// //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// //           ))}
// //         </div>
// //         <div style={{ ...styles.space, width: spaceWidth }}></div>
// //         <div style={styles.side}>
// //           {rightSeats.map((num) => (
// //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {rows.map((rowNumber) => (
// //         <div key={rowNumber} style={styles.rowContainer}>
// //           {renderSeats(rowNumber)}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: '20px',
// //   },
// //   rowContainer: {
// //     marginBottom: '15px',
// //   },
// //   row: {
// //     display: 'flex',
// //     alignItems: 'center',
// //   },
// //   side: {
// //     display: 'flex',
// //     gap: '10px',
// //   },

// // };

// // export default SeatingArrangement;


// import React, { useState } from 'react';
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState(false);

//   const handleFlipSeats = () => {
//     setFlipSeats(true);
//     setTimeout(() => setFlipSeats(false), 1000); // Reset after animation duration
//   };

//   const renderSeats = (rowNumber) => {
//     const isOddRow = rowNumber % 2 !== 0;
//     const seatCount = isOddRow ? 8 : 6;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     return (
//       <div style={styles.row}>
//         <div style={styles.side}>
//           {leftSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats} />
//           ))}
//         </div>
//         <div style={styles.space}></div>
//         <div style={styles.side}>
//           {rightSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <button onClick={handleFlipSeats} style={styles.button}>Flip All Seats</button>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           {renderSeats(rowNumber)}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '15px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '10px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;





// import React, { useState } from 'react';
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState({});

//   const handleSequentialFlip = async () => {
//     const allSeats = [];
//     rows.forEach((rowNumber) => {
//       const isOddRow = rowNumber % 2 !== 0;
//       const seatCount = isOddRow ? 8 : 6;
//       const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//       const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//       // Add each seat ID to the list for sequential flipping
//       leftSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//       rightSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//     });

//     // Flip each seat one by one with a 2-second delay
//     for (let i = 0; i < allSeats.length; i++) {
//       const seatId = allSeats[i];
//       setFlipSeats({ [seatId]: true });

//       // Wait for 2 seconds before flipping the next seat
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Reset the current seat flip after 1 second (matching animation duration)
//       setFlipSeats({ [seatId]: false });
//     }
//   };

//   const renderSeats = (rowNumber) => {
//     const isOddRow = rowNumber % 2 !== 0;
//     const seatCount = isOddRow ? 8 : 6;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);
//     const spaceWidth = isOddRow ? '40px' : '100px';

//     return (
//       <div style={styles.row}>
//         <div style={styles.side}>
//           {leftSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats[`R${rowNumber}S${num}`]} />
//           ))}
//         </div>
//         <div style={styles.space}></div>
//         <div style={styles.side}>
//         <div style={{ ...styles.space, width: spaceWidth }}></div>
//           {rightSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats[`R${rowNumber}S${num}`]} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <button onClick={handleSequentialFlip} style={styles.button}>Flip Seats Sequentially</button>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           {renderSeats(rowNumber)}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '15px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '10px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;








// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState({});
//   const location = useLocation(); // Get the location object
//   const seatNumber = location.state?.seatNumber; // Retrieve the seat number from the state
//   const role = location.state?.role; // Retrieve the role from the state (Employee or Vendor)

//   useEffect(() => {
//     if (seatNumber) {
//       console.log('Seat number:', seatNumber); // Log seat number
//     }
//     if (role) {
//       console.log('Role:', role); // Log role
//     }
//   }, [seatNumber, role]);

//   const handleSequentialFlip = async () => {
//     const allSeats = [];
//     rows.forEach((rowNumber) => {
//       const isOddRow = rowNumber % 2 !== 0;
//       const seatCount = isOddRow ? 8 : 6;
//       const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//       const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//       leftSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//       rightSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//     });

//     for (let i = 0; i < allSeats.length; i++) {
//       const seatId = allSeats[i];
//       setFlipSeats({ [seatId]: true });

//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       setFlipSeats({ [seatId]: false });
//     }
//   };

//   const renderSeats = (rowNumber) => {
//     const isOddRow = rowNumber % 2 !== 0;
//     const seatCount = isOddRow ? 8 : 6;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     // Ensure that role is defined
//     const rolePrefix = role ? role[0].toUpperCase() : ''; // Default to empty string if role is undefined

//     return (
//       <div style={styles.row}>
//         <div style={styles.side}>
//           {leftSeats.map((num) => {
//             const seatNumberFormatted = `${rolePrefix}${num}`; // Use rolePrefix
//             console.log('Rendering seat:', seatNumberFormatted); // Log the seat being rendered
//             return (
//               <Seat
//                 key={`${rowNumber}-${num}`}
//                 seatNumber={seatNumberFormatted}
//                 shouldFlip={flipSeats[`R${rowNumber}S${num}`]}
//               />
//             );
//           })}
//         </div>
//         <div style={styles.space}></div>
//         <div style={styles.side}>
//           {rightSeats.map((num) => {
//             const seatNumberFormatted = `${rolePrefix}${num + seatCount / 2}`; // Use rolePrefix
//             console.log('Rendering seat:', seatNumberFormatted); // Log the seat being rendered
//             return (
//               <Seat
//                 key={`${rowNumber}-${num}`}
//                 seatNumber={seatNumberFormatted}
//                 shouldFlip={flipSeats[`R${rowNumber}S${num}`]}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <button onClick={handleSequentialFlip} style={styles.button}>Flip Seats Sequentially</button>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           {renderSeats(rowNumber)}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '15px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '10px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;





import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';  // Import axios for API calls
import Seat from './Seat';

const SeatingArrangement = () => {
  const rows = Array.from({ length: 12 }, (_, i) => i + 1);
  const [flipSeats, setFlipSeats] = useState({});
  const [bookedSeats, setBookedSeats] = useState({}); // To track which seats are booked
  const [attendedSeats, setAttendedSeats] = useState([]); // State to store attended seats

  const location = useLocation();
  const seatNumber = location.state?.seatNumber; // Get seat number like E1, V1 from the location state

  // Employee and Vendor seat number counters
  let employeeSeatCount = 1;
  let vendorSeatCount = 1;

  useEffect(() => {
    // Fetch attended seats on component mount
    const fetchAttendedSeats = async () => {
      try {
        const response = await axios.get('https://orca-app-zbdu3.ondigitalocean.app/api/attended-seats', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        setAttendedSeats(response.data);
        console.log(response.data, "Attended Seats Data");
      } catch (error) {
        console.error('Error fetching attended seats', error);
      }
    };
  
    fetchAttendedSeats();
  }, []);
  



  useEffect(() => {
    if (seatNumber) {
      // Flip the specific seat passed in the location
      flipSeat(seatNumber);
    }
  }, [seatNumber]);

  const flipSeat = (seat) => {
    // Flip the specific seat (turn it black)
    setFlipSeats((prev) => ({
      ...prev,
      [seat]: true, // Mark the seat as flipped
    }));
  
    // Mark seat as booked
    setBookedSeats((prev) => ({
      ...prev,
      [seat]: true, 
    }));
  
    // Optionally reset the flipped seat after a delay
    setTimeout(() => {
      setFlipSeats((prev) => ({
        ...prev,
        [seat]: false, // Reset the flipped seat
      }));
    }, 2000); // Adjust timeout duration as needed
  };
  

  const renderSeats = (rowNumber) => {
    const isOddRow = rowNumber % 2 !== 0;
    const seatCount = isOddRow ? 8 : 6;
    const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
    const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);
  
    const seats = [];
  
    const spaceStyle = { width: isOddRow ? '20px' : '60px' }; // Wider space for even rows
  
    const mapSeatNumbers = (sideSeats, rolePrefix) => {
      return sideSeats.map((num) => {
        let seatId = rolePrefix === 'E' ? `E${employeeSeatCount++}` : `V${vendorSeatCount++}`;
        const isAttended = attendedSeats.includes(seatId);
  
        return (
          <Seat
            key={seatId}
            seatNumber={seatId}
            shouldFlip={flipSeats[seatId]}
            isBooked={bookedSeats[seatId]}
            isAttended={isAttended} // Pass if the seat is attended
          />
        );
      });
    };
  
    seats.push(
      <div style={styles.side} key={`left-${rowNumber}`}>
        {mapSeatNumbers(leftSeats, 'E')}
      </div>
    );
  
    seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);
  
    seats.push(
      <div style={styles.side} key={`right-${rowNumber}`}>
        {mapSeatNumbers(rightSeats, 'V')}
      </div>
    );
  
    return seats;
  };
  
  
  return (
    <div style={styles.container}>
      <button onClick={() => flipSeat(seatNumber)} style={styles.button}> </button>
      {rows.map((rowNumber) => (
        <div key={rowNumber} style={styles.rowContainer}>
          <div style={styles.row}>
          {renderSeats(rowNumber)} 
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    marginTop:'30px'
  },
  button: {
    marginBottom: '20px',
    padding: '10px 20px',
    fontSize: '16px',
  },
  rowContainer: {
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  side: {
    display: 'flex',
    gap: '5px',
  },
  space: {
    width: '40px',
  },
};

export default SeatingArrangement;
