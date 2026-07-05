import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ForumDetails() {

  const { forumId } = useParams();

  const [forum, setForum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/forums/${forumId}`
      );

      setForum(response.data);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="ForumDetails">

      <h1>{forum.name}</h1>

      <p>{forum.description}</p>

      <p>{forum.icon}</p>

      {forum.image && (
        <img
          className="details-image"
          src={forum.image}
          alt={forum.name}
        />
      )}

      <Link to="/forums">
        <button>Back to Forums</button>
      </Link>

      <Link to={`/forums/edit/${forum._id}`}>
        <button>Edit Forum</button>
      </Link>

    </div>
  );
}

export default ForumDetails;