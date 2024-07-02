import './App.css';
import {useState} from "react";
import EventForm from './EventForm';
import EventList from './EventList';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent])
  };

  const handleDateChange = (e) => [
    setSelectedDate(e.target.value)
  ];

  return (
    <div class="App">
      <h1>Calendar App</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        required
        ></input>
        <EventForm onAddEvent={addEvent} selectedDate={selectedDate}></EventForm>
        <EventList events={events} selectedDate={selectedDate}></EventList>
    </div>
  );
}

export default App;
