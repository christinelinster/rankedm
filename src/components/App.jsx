import { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import EventForm from "./EventForm";
import Event from "./Event";
import "../main.css";

function App(){

    const [showModal, setShowModal] = useState(false);
    const [events, setEvents] = useState([]);
 

    function openModal(){
        setShowModal(true);
    }

    function closeModal(){
        setShowModal(false);
    }

    function handleEventSubmit(data) {
        setEvents([...events, data]); 
        closeModal();
    }

    return (
        <div className="App">
        <Header onModal ={openModal}/>
        <Modal show={showModal} onClose={closeModal}> 
            <EventForm onSubmit={handleEventSubmit} onClose={closeModal} />
        </Modal>
        <div className="event-list">
        {events.map((event, index) => (
                    <Event
                        key={index}
                        eventName={event.eventName}
                        eventDate={event.eventDate}
                        location={event.location}
                        rating={event.rating}
                        artists={event.artists}
                    />
                ))}
        </div>
        
        </div>
    )
}

export default App;