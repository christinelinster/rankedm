import { useState } from "react";
import CustomDateInput from "./CustomDateInput";
import "../EventForm.css";

function EventForm(){
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [artists, setArtists] = useState([""]);
  const [friends, setFriends] = useState([""]);

    function handleArtistChange(index,value){
        const newArtists = [...artists];
    newArtists[index] = value;
    setArtists(newArtists);
    }

    function addArtist(){
        setArtists([...artists, ""]);
    }

    function handleFriendChange(index,value){
        const newFriends = [...friends];
        newFriends[index] = value;
        setFriends(newFriends);
    }

    function addFriend(){
        setFriends([...friends, ""]);
    }

    function handleSubmit(e){
        e.preventDefault();
        const eventData = {
            eventDate,
      location,
      rating,
      artists: artists.filter((artist) => artist.trim() !== ""),
      friends: friends.filter((friend) => friend.trim() !== ""),
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
          {artists.map((artist, index) => (
            <input
              key={index}
              type="text"
              placeholder="Name"
              value={artist}
              onChange={(e) => handleArtistChange(index, e.target.value)}
            />
          ))}
          <button className="add-person" type="button" onClick={addArtist}>
            + Add Artist
          </button>
          <label>Friends</label>
          {friends.map((friend, index) => (
            <input
              key={index}
              type="text"
              placeholder="Name"
              value={friend}
              onChange={(e) => handleFriendChange(index, e.target.value)}
            />
          ))}
          <button className="add-person" type="button" onClick={addFriend}>
            + Add Friend
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