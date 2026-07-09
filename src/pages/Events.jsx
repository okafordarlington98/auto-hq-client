import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import EventCard from "../components/EventCard";

function Events() {

  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {

    const searchText = search.toLowerCase();

    const filtered = allEvents.filter((event) => {

      return (
        event.title?.toLowerCase().includes(searchText) ||
        event.description?.toLowerCase().includes(searchText) ||
        event.location?.toLowerCase().includes(searchText) ||
        event.organizer?.toLowerCase().includes(searchText)
      );

    });

    setFilteredEvents(filtered);

  }, [search, allEvents]);

  const getData = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/events`
      );

      console.log(response.data);

      setAllEvents(response.data);
      setFilteredEvents(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setIsLoading(false);

    }

  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (

    <div className="events-page">

      <div className="events-container">

        <Link to="/events/create">
          <button className="create-btn">
            Create Event
          </button>
        </Link>

        <div className="search-filter">

          <input
            type="text"
            placeholder="🔍 Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="events-grid">

          {filteredEvents.length > 0 ? (

            filteredEvents.map((event) => (

              <EventCard
                key={event._id}
                event={event}
              />

            ))

          ) : (

            <h2>No events found.</h2>

          )}

        </div>

      </div>

    </div>

  );

}

export default Events;