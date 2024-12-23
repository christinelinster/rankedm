import { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import EventForm from "./EventForm";
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
        </div>
    )
}

export default App;