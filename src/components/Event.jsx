import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "../Event.css"


function Event(){
    return(
        
        <div className="card"> 
        <div className="heading">
            <div className="event-info">
            <h1 className="event-heading">Skrillex | EDC 2024</h1>
            <p className="event-detail"> <PlaceIcon fontSize="small"/>Encore Beach Club</p>
            <p className="event-detail"> <CalendarMonthIcon fontSize="small"/> 05/15/2024</p>
            </div>
            <p className='event-rating'>10.0</p>
        </div>
        <div className='event-artists'>
            <ul>
            <li>Layz</li>
            <li>Jessica Audifred</li>
            <li>NGHTMRE</li>
            <li>Zomboy</li>
            <li>Blastoyz</li>
            <li>Eric Prydz</li>
            <li>Carl Cox</li>
            <li>John Summit</li>
            <li>Adventure Club</li>
            </ul>
        </div>
            
        </div>
    )
}

export default Event;