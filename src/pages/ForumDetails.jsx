import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ForumDetails() {

  const { forumId } = useParams();

  const [forum, setForum] = useState(null);

  const [comments, setComments] = useState([]);

  const [author, setAuthor] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {

    getForum();

    getComments();

  }, []);

  const getForum = async () => {

    const response = await axios.get(

      `${import.meta.env.VITE_SERVER_URL}/api/forums/${forumId}`

    );

    setForum(response.data);

  };

  const getComments = async () => {

    const response = await axios.get(

      `${import.meta.env.VITE_SERVER_URL}/api/comments/forum/${forumId}`

    );

    setComments(response.data);

  };

  const addComment = async (e) => {

    e.preventDefault();

    await axios.post(

      `${import.meta.env.VITE_SERVER_URL}/api/comments`,

      {

        forum: forumId,

        author,

        message,

      }

    );

    setAuthor("");

    setMessage("");

    getComments();

  };

  const likeComment = async (id) => {

    await axios.put(

      `${import.meta.env.VITE_SERVER_URL}/api/comments/${id}/like`

    );

    getComments();

  };

  const deleteComment = async (id) => {

    await axios.delete(

      `${import.meta.env.VITE_SERVER_URL}/api/comments/${id}`

    );

    getComments();

  };

  if (!forum) return <h2>Loading...</h2>;

  return (

  <div className="forum-details">

    <img
      src={forum.image}
      alt={forum.name}
      className="details-image"
    />

    <div className="details-content">

      <h1>{forum.name}</h1>

      <p>{forum.description}</p>

      <p>
        <strong>Icon:</strong> {forum.icon}
      </p>

      <div className="event-buttons">
        <Link to="/forums">
          <button className="view-btn">
            Back to Forums
          </button>
        </Link>

        <Link to={`/forums/edit/${forum._id}`}>
          <button className="view-btn">
            Edit Forum
          </button>
        </Link>
      </div>

      <hr />

      <h2>Community Discussion</h2>

      <form className="comment-form" onSubmit={addComment}>

        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea
          placeholder="Write a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          Add Comment
        </button>

      </form>

      <div className="comments">

        {comments.length === 0 && (
          <p>No comments yet. Be the first!</p>
        )}

        {comments.map((comment) => (

          <div
            key={comment._id}
            className="comment-card"
          >

            <h4>{comment.author}</h4>

            <p>{comment.message}</p>

            <small>👍 {comment.likes}</small>

            <div className="event-buttons">

              <button
                className="view-btn"
                onClick={() => likeComment(comment._id)}
              >
                Like
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteComment(comment._id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>
);

}

export default ForumDetails;