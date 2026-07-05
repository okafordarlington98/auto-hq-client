import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // used for calling the API

import EventCard from "../components/EventCard"; // used to render each Event

function Events() {

    const [allEvents, setAllEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
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
        <div className="events-page">

            <div className="events-container">

                <Link to="/events/create">
                    <button className="create-btn">Create Event</button>
                </Link>

                <div className="events-grid">
                    {/* ... list of all events should be rendered here   */}
                    {/* ... for each event, we should render one EventCard */}
                    {allEvents.map((event) => {
                        return <EventCard
                        key={event._id}
                        event={event} 
                        />
                        //* ...or passing the properties of the object by spreading them
                        // return <EventCard key={event.id} {...event}/>
                    })}

                </div>

            </div>



        </div>
    );
}

export default Events;