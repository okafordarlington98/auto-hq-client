import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // used for calling the API

function EditEvent() {

  const navigate = useNavigate()
  const { eventId } = useParams() // destructuring the project id from dynamic params (see App.jsx => /:projectId)
  
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ date, setDate ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");
  const [ image, setImage ] = useState("");
  const [ organizer, setOrganizer ] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  // const [ isLoading, setIsLoading ] = useState(true)

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const body = {
    title,
    description,
    location,
    date,
    startTime,
    endTime,
    image,
    organizer
  };

    try {
      // call the API here to edit one event...
      await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/api/events/${eventId}`,
      body
    );

    navigate(`/events/${eventId}`);
    
    } catch (error) {
      console.log(error)
      //todo proper error handling here 
    }
  };

  const deleteEvent = async() => {
    try {
      // call the API here to delete one event...
      await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/api/events/${eventId}`
    );

    navigate("/events");
    
    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }; 

  // if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here

  return (
    <div className="EditEvent">
      <h3>Edit the Event</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Location</label>
        <textarea
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Date</label>
        <input
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>StartTime</label>
        <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        />

        <label>EndTime</label>
        <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        />

        <label>Image</label>
        <textarea
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Organizer</label>
        <textarea
          name="organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
        />

        <button type="submit">Update Event</button>
      </form>

      <button onClick={deleteEvent}>Delete Event</button>      
    </div>
  );
}

export default EditEvent;
