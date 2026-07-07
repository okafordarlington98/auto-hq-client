import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditForum() {

  const navigate = useNavigate();
  const { forumId } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getForum();
  }, []);

  const getForum = async () => {
    try {

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/forums/${forumId}`,
      );

      const forum = response.data;

      setName(forum.name);
      setDescription(forum.description);
      setIcon(forum.icon);
      setImage(forum.image);

    } catch (error) {
      console.log(error);
    } finally {
    setIsLoading(false);
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body= {
          name,
          description,
          icon,
          image
        }

    try {

      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/api/forums/${forumId}`, body
        
      );

      navigate(`/forums/${forumId}`);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteForum = async () => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this forum?"
    );

    if (!confirmed) return;

    try {

      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/forums/${forumId}`
      );

      navigate("/forums");

    } catch (error) {
      console.log(error);
    }
};

// if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here
  if (isLoading) {

    return <h2>Loading...</h2>;
  }

  return (

    <div className="form">

      <h2>Edit Forum</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <label>Description:</label>

        <textarea
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <label>Icon:</label>

        <input
          value={icon}
          onChange={(e)=>setIcon(e.target.value)}
        />

        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Update Forum</button>

      </form>

      <button
        className="delete-btn"
        onClick={deleteForum}
      >
        Delete Forum
      </button>

    </div>

  );

}

export default EditForum;