import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"; // used for calling the API

function CreateEvent() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [image, setImage] = useState("");
    const [organizer, setOrganizer] = useState("");

    const handleSubmit = async (e) => {
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
            // call the API here to create one event...
            await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/events`, body)

            navigate("/events")

        } catch (error) {
            console.log(error)
            //todo proper error handling here
        }
    };

    return (
        <div className="form">

            <h3>Add Event</h3>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Location:</label>
                <textarea
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <label>StartTime:</label>
                <input
                    type="time"
                    name="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />

                <label>EndTime:</label>
                <input
                    type="time"
                    name="endTime"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />

                <label>Image:</label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <label>Organizer:</label>
                <input
                    type="text"
                    name="organizer"
                    value={organizer}
                    onChange={(e) => setOrganizer(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateEvent;
