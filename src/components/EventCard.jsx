import { Link } from "react-router-dom";


function EventCard({ event }) {

    return (
        <div className="event-card">

            <img src={event.image} alt={event.title} />

            <div className="event-info">

                <h2>{event.title}</h2>

                <p>{event.description}</p>

                <p>📍 {event.location}</p>

                <p>📅 {new Date(event.date).toLocaleDateString()}</p>

                <p>🕘 {event.startTime} - {event.endTime}</p>

                <p>👤 {event.organizer}</p>


                <div className="event-buttons">

                    <Link to={`/events/${event._id}`}>

                        <button className="view-btn">
                            View Event
                        </button>

                    </Link>

                    <Link to={`/events/edit/${event._id}`}>

                        <button className="view-btn">
                            Edit Event
                        </button>

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default EventCard;