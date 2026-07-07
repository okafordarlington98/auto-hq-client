import { Link } from "react-router-dom";

function ForumCard({ forum }) {
  return (
    <div className="event-card">

      <img src={forum.image} alt={forum.name} />

      <div className="event-info">

        <h2>{forum.name}</h2>

        <p>{forum.description}</p>

        <p>{forum.icon}</p>

        <div className="event-buttons">

          <Link to={`/forums/${forum._id}`}>
            <button className="view-btn">View Forum</button>
          </Link>

          <Link to={`/forums/edit/${forum._id}`}>
            <button className="view-btn">Edit Forum</button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForumCard;