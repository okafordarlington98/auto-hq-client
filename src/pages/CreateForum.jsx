import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"; // used for calling the API

function CreateForum() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name: name,
            description: description,
            icon: icon,
            image: image,
        }

        try {
            // call the API here to create one forum...
            await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/forums`, body)

            navigate("/forums")

        } catch (error) {
            console.log(error)
            //todo proper error handling here
        }
    };

    return (
        <div className="CreateForum">
            <h3>Add Forum</h3>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Icon:</label>
                <textarea
                    type="text"
                    name="icon"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                />

                <label>Image:</label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateForum;
