import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // used for calling the API

import EventCard from "../components/EventCard"; // used to render each Event

function Events() {

  const [ allEvents, setAllEvents ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    try {

      // call the API here to receive all ebents...
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/events`)
      console.log(response.data)
      setAllEvents(response.data)

      setIsLoading(false) // render the component once the data finished loading

    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }

   if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here

   return (
    <div className="Events">

      <Link to="/events/create">
        <button>Create Event</button>
      </Link>     

      {/* ... list of all events should be rendered here   */}
      {/* ... for each event, we should render one EventCard */}
      {allEvents.map((event) => {
        return <EventCard/>

        //* ...or passing the properties of the object by spreading them
        // return <EventCard key={event.id} {...event}/>
      })}
       
    </div>
  );
}

export default Events;