import { Link } from "react-router-dom";

function EventCard ({}) {
  
  return (
    <div className="EventCard card">
      <Link to={`/events/event.id`}>
        <h3>{event.title}</h3>
      </Link>

      <p>{event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
      <p><strong>Organizer:</strong> {event.organizer}</p>

      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          width="250"
        />
      )}
    </div>
  );
}

export default EventCard;