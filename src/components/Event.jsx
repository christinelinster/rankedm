import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "../Event.css"


function Event({ eventName, eventDate, location, rating, artists }){
    return(
        
        <div className="card"> 
        <div className="heading">
            <div className="event-info">
            <h1 className="event-heading">{eventName}</h1>
            <p className="event-detail"> <PlaceIcon fontSize="small"/>{location}</p>
            <p className="event-detail"> <CalendarMonthIcon fontSize="small"/> {eventDate}</p>
            </div>
            <p className='event-rating'>{rating}</p>
        </div>
        <div className='event-artists'>
        <ul>
                    {artists.map((artist, index) => (
                        <li key={index}>{artist}</li>
                    ))}
                </ul>
        </div>
            
        </div>
    )
}

export default Event;