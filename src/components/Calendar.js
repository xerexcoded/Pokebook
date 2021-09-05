import React , {useState} from 'react';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


function CalendarApp()
{
  const [dateState ,setDateState] = useState(new Date()) //current date
  const changeDate =(e)=>{
    setDateState(e)
  }
return(
   <div className="Container-fluid">
    <div className="favorites-header">
      <h2>CALENDAR</h2>
    </div>    
  <div className="calendar-main">
    <div className="card">
      <div className="calendar-card-body">
        <>
        <Calendar
        value={dateState}
        onChange={changeDate}
        className="calendar-body"
        />
        </>
      </div>
    </div>

  </div>

  </div>

);}
export default CalendarApp;