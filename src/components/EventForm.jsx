import { useState } from "react";
import CustomDateInput from "./CustomDateInput";
import AddArtist from "./AddArtist";
import "../EventForm.css";

function EventForm(){
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState("");
    const [artists, setArtists] = useState([]);

    function addArtist(newArtist){
      setArtists((prevArtists)=>{
        return [...prevArtists, newArtist]
      })
  }
    

    function handleSubmit(e){
        e.preventDefault();
        const eventData = {
            eventDate,
      location,
      rating,
      artists
        };

        console.log(eventData);
    }

return(
    <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="item item-1">
            <input
            className="event-name"
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          </div>

        <div className="item item-2">
          <label>
            Date
            <CustomDateInput selectedDate={eventDate} onChange={setEventDate} />
          </label>
        </div>
        <div className="item item-3">
          <label>
            Location
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>
        <div className="item item-4">
          <label>
            Rating
            <input
              type="number"
              placeholder="0"
              max="10.0"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
        </div>
        <div className="item item-5">
          <label>Artists</label>
          <AddArtist/>
          {artists.map((artist,index)=>{
            return(
              <AddArtist
              key={index}
              value ={artist}
              />
            )
          })}
          <button className="add-person" type="button" onClick={addArtist}>
            + Add Artist
          </button>
        </div>

        <div className="item item-6">
          <button type="submit">Create Event</button>
        </div>
      </div>

    </form>
)

}

export default EventForm;