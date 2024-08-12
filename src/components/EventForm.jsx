import { useState } from "react";
import CustomDateInput from "./CustomDateInput";
import "../EventForm.css";

function EventForm(props){
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState("");
    const [artists, setArtists] = useState([""]);

    function addArtist(){
      setArtists([...artists, ""]);
    };

  function handleArtistChange(index, value){
    const newArtists = [...artists];
    newArtists[index] = value;
    setArtists(newArtists);
}

function handleSubmit(e) {
  e.preventDefault();
  const eventData = {
      eventName,
      eventDate,
      location,
      rating,
      artists: artists.filter((artist) => artist.trim() !== "")
  };
  console.log(eventData);
  props.onSubmit(eventData);
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
            name="event-name"
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
              name="location"
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
              name="rating"
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
        </div>
        <div className="item item-5">
          <label>Artists</label>
          {artists.map((artist, index) => (
            <input
              key={index}
              type="text"
              placeholder="Name"
              value={artist}
              name="artist"
              onChange={(e) => handleArtistChange(index, e.target.value)}
            />
          ))}
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
