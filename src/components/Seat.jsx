// // Seat.js
// import React from 'react';

// const Seat = ({ seatNumber }) => {
//   return (
//     <div style={styles.seat}>
//       {seatNumber}
//     </div>
//   );
// };

// const styles = {
//   seat: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: 'blue',
//     color: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '5px',
//   },
// };

// export default Seat;





// import React from 'react';
// import emptySeatSvg from '../assets/unfilled.png';
// import bookedSeatSvg from '../assets/filled.png';
// import '../App.css';

// const Seat = ({ seatNumber, shouldFlip, isBooked, isAttended, onSeatClick }) => {
//   const seatStyle = {
//     padding: '10px',
//     margin: '5px',
//     width: '33px',
//     height: '33px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     position: 'relative',
//     overflow: 'visible', // Changed to visible to show popup
//   };

//   const popupStyle = {
//     position: 'absolute',
//     top: '-40px', // Position above the seat
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: 'white',
//     border: '2px solid black',
//     borderRadius: '50px',
//     padding: '5px 15px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     animation: shouldFlip ? 'popup 0.3s ease' : 'none',
//     whiteSpace: 'nowrap',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
//   };

//   const handleClick = (e) => {
//     if (onSeatClick) {
//       onSeatClick(seatNumber, {
//         x: e.currentTarget.getBoundingClientRect().left + 16,
//         y: e.currentTarget.getBoundingClientRect().top
//       });
//     }
//   };

//   return (
//     <div style={seatStyle} onClick={handleClick}>
//       {shouldFlip && (
//         <div style={popupStyle}>
//           {seatNumber}
//         </div>
//       )}
//       <img 
//         src={isBooked ? bookedSeatSvg : emptySeatSvg} 
//         alt="Seat" 
//         style={{ 
//           width: '100%', 
//           height: '100%', 
//           transform: isBooked ? 'scale(2.5)' : 'scale(2)',
//         }} 
//       />
//       {!isBooked && <span style={{ position: 'absolute' }}>{}</span>}
//     </div>
//   );
// };

// export default Seat;







import React from 'react';
import emptySeatSvg from '../assets/unfilled.png';
import bookedSeatSvg from '../assets/filled.png';
import '../App.css';

const Seat = ({ seatNumber, shouldFlip, isBooked, isAttended, onSeatClick }) => {
  const seatStyle = {
    padding: '10px',
    margin: '5px',
    width: '33px',
    height: '33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'visible', // Ensure the popup stays visible
  };

  const popupStyle = {
    position: 'absolute',
    top: '-40px', // Position above the seat
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '50px',
    padding: '5px 15px',
    fontSize: '14px',
    fontWeight: 'bold',
    animation: shouldFlip ? 'popup 0.3s ease' : 'none',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    zIndex: 10, // Ensure the popup stays above the seat
  };

  const handleClick = (e) => {
    if (onSeatClick) {
      onSeatClick(seatNumber, {
        x: e.currentTarget.getBoundingClientRect().left + 16,
        y: e.currentTarget.getBoundingClientRect().top,
      });
    }
  };

  return (
    <div style={seatStyle} onClick={handleClick}>
      {shouldFlip && (
        <div style={popupStyle}>
          {seatNumber}
        </div>
      )}
      <img 
        src={isBooked ? bookedSeatSvg : emptySeatSvg} 
        alt="Seat" 
        style={{ 
          width: '100%', 
          height: '100%', 
          transform: isBooked ? 'scale(2.5)' : 'scale(2)', 
          transition: 'transform 0.3s ease' // Smooth transition for scaling
        }} 
      />
      {!isBooked && <span style={{ position: 'absolute' }}>{}</span>}
    </div>
  );
};

export default Seat;




// import React, { useState, useEffect } from 'react';
// import emptySeatSvg from '../assets/unfilled.png';
// import bookedSeatSvg from '../assets/filled.png';
// import '../App.css';

// const Seat = ({ seatNumber, isBooked, onSeatClick, activeSeat }) => {
//   // State to track whether the seat number should be shown
//   const [isClicked, setIsClicked] = useState(false);

//   // Effect to reset the seat number visibility based on the activeSeat prop
//   useEffect(() => {
//     if (activeSeat === seatNumber) {
//       setIsClicked(true); // Show seat number if it's the active seat
//     } else {
//       setIsClicked(false); // Hide seat number if it's not the active seat
//     }
//   }, [activeSeat, seatNumber]);

//   const seatStyle = {
//     padding: '10px',
//     margin: '5px',
//     width: '33px',
//     height: '33px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     position: 'relative',
//     overflow: 'visible', // Ensure the popup stays visible
//   };

//   const popupStyle = {
//     position: 'absolute',
//     top: '-40px', // Position above the seat
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: 'white',
//     border: '2px solid black',
//     borderRadius: '50px',
//     padding: '5px 15px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     whiteSpace: 'nowrap',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
//     zIndex: 10, // Ensure the popup stays above the seat
//   };

//   const handleClick = (e) => {
//     setIsClicked(true); // Set to true when seat is clicked
//     if (onSeatClick) {
//       onSeatClick(seatNumber, {
//         x: e.currentTarget.getBoundingClientRect().left + 16,
//         y: e.currentTarget.getBoundingClientRect().top,
//       });
//     }
//   };

//   return (
//     <div style={seatStyle} onClick={handleClick}>
//       {/* Show popup only when clicked or when the seat is the active one */}
//       {isClicked && (
//         <div style={popupStyle}>
//           {seatNumber}
//         </div>
//       )}
//       <img 
//         src={isBooked ? bookedSeatSvg : emptySeatSvg} 
//         alt="Seat" 
//         style={{ 
//           width: '100%', 
//           height: '100%', 
//           transform: isBooked ? 'scale(2.5)' : 'scale(2)', 
//           transition: 'transform 0.3s ease' // Smooth transition for scaling
//         }} 
//       />
//     </div>
//   );
// };

// export default Seat;
