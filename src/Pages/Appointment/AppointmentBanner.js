import React from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Chair from "../../assets/images/chair.png";


const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #3A4255;
    color: #3A4255;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #0FCEE9;
  }
`;

const AppointmentBanner = ({date,setDate}) => {
    
  
  return (
    <div>
      <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Chair} alt="Dentist Chair" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
        <style>{css}</style>
          <DayPicker 
          mode="single"
          selected={date}
          onSelect={setDate}
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today'
          }}
          modifiersStyles={{
            disabled: { fontSize: '75%' }
          }}
          />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
