import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function EventDetails() {

  const { eventId } = useParams();

  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/events/${eventId}`
      );

      setEvent(response.data);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="EventDetails">

      <h1>{event.title}</h1>

      <p>{event.description}</p>

      <p><strong>Location:</strong> {event.location}</p>

      <p><strong>Date:</strong> {event.date}</p>

      <p><strong>Start:</strong> {event.startTime}</p>

      <p><strong>End:</strong> {event.endTime}</p>

      <p><strong>Organizer:</strong> {event.organizer}</p>

      {event.image && (
        <img
          className="details-image"
          src={event.image}
          alt={event.title}
        />
      )}

      <Link to="/events">
        <button>Back to Events</button>
      </Link>

      <Link to={`/events/edit/${event._id}`}>
        <button>Edit Event</button>
      </Link>

    </div>
  );
}

export default EventDetails;