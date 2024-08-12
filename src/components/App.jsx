import { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import EventForm from "./EventForm";
import Event from "./Event";
import "../main.css";

function App(){

    const [showModal, setShowModal] = useState(false);


    function openModal(){
        setShowModal(true);
    }

    function closeModal(){
        setShowModal(false);
    }

    return (
        <div className="App">
        <Header onModal ={openModal}/>
        <Modal show={showModal} onClose={closeModal}> 
            <EventForm/>
        </Modal>
        <div className="event-list">
        
        <Event/>
        </div>
        
        </div>
    )
}

export default App;