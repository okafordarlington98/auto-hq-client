import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // used for calling the API

import ForumCard from "../components/ForumCard"; // used to render each Forum

function Forums() {

  const [allForums, setAllForums] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {

      // call the API here to receive all forums...
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/forums`)
      console.log(response.data)
      setAllForums(response.data)

      setIsLoading(false) // render the component once the data finished loading

    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }

  if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here

  return (
    <div className="Forums">

      <Link to="/forums/create">
        <button>Create Forum</button>
      </Link>

      {/* ... list of all forums should be rendered here   */}
      {/* ... for each forum, we should render one ForumCard */}
      {allForums.map((forum) => (

        <ForumCard

          key={forum._id}

          forum={forum}

        />

        //* ...or passing the properties of the object by spreading them
        // return <ForumCard key={forum.id} {...forum}/>
      ))}

    </div>
  );
}

export default Forums;