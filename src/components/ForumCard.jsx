import { Link } from "react-router-dom";

function ForumCard ({}) {
  
  return (
    <div className="ForumCard card">
      <Link to={`/forums/forum.id`}>
        <h3>{forum.name}</h3>
      </Link>

      <p>{forum.description}</p>
      <p><strong>Icon:</strong> {forum.icon}</p>

      {forum.image && (
        <img
          src={forum.image}
          alt={forum.name}
          width="250"
        />
      )}
    </div>
  );
}

export default ForumCard;