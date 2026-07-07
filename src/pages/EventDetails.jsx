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

      {event.image && (
        <img
          className="details-image"
          src={event.image}
          alt={event.name}
        />
      )}

      <div className="details-content">

        <h1>{event.title}</h1>

        <p>{event.description}</p>

        <p><strong>Location:</strong> {event.location}</p>

        <p>
          <strong>Date:</strong>{" "}
          {new Date(event.date).toLocaleDateString()}
        </p>

        <p>
          <strong>Time:</strong> {event.startTime} - {event.endTime}
        </p>

        <p>
          <strong>Organizer:</strong> {event.organizer}
        </p>


        <div className="event-buttons">

          <Link to="/events">
            <button className="view-btn">Back to Events</button>
          </Link>

          <Link to={`/events/edit/${event._id}`}>
            <button className="view-btn">Edit Event</button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default EventDetails;