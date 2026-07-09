import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ForumCard from "../components/ForumCard";

function Forums() {

  const [allForums, setAllForums] = useState([]);
  const [filteredForums, setFilteredForums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {

    const filtered = allForums.filter((forum) =>
      forum.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredForums(filtered);

  }, [search, allForums]);

  const getData = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/forums`
      );

      console.log(response.data);

      setAllForums(response.data);
      setFilteredForums(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setIsLoading(false);

    }

  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="events-page">

      <div className="events-container">

        <Link to="/forums/create">
          <button className="create-btn">
            Create Forum
          </button>
        </Link>

        <div className="search-filter">

          <input
            type="text"
            placeholder="🔍 Search forums..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="events-grid">

          {filteredForums.length > 0 ? (

            filteredForums.map((forum) => (

              <ForumCard
                key={forum._id}
                forum={forum}
              />

            ))

          ) : (

            <h2>No forums found.</h2>

          )}

        </div>

      </div>

    </div>

  );

}

export default Forums;