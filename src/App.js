import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import Calender from "./features/calender/Calender";



function App() {
  
  return (
    <div className="App">
      <Calender />
    </div>
  );
}

export default App;
