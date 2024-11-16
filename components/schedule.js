import React from 'react';

const Schedule = () => {
  const leftColumn = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12"
  ];
  const middleColumn = [
    "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20", "Item 21", "Item 22", "Item 23", "Item 24"
  ];
  const rightColumn = [
    "Item 25", "Item 26", "Item 27", "Item 28", "Item 29", "Item 30", "Item 31", "Item 32", "Item 33", "Item 34", "Item 35", "Item 36"
  ];

  return (
    <main id='schedule' className="schedule-main" >
      <h2 className="schedule-heading">Schedule</h2>
      
      <div className="grid-container">
        <div className="grid-column left-column">
          {leftColumn.map((item, index) => (
            <div key={index} className="grid-item">{item}</div>
          ))}
        </div>
        
        <div className="grid-column middle-column">
          {middleColumn.map((item, index) => (
            <div key={index} className="grid-item">{item}</div>
          ))}
        </div>

        <div className="grid-column right-column">
          {rightColumn.map((item, index) => (
            <div key={index} className="grid-item">{item}</div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Schedule;
