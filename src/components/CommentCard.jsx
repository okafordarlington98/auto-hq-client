function CommentCard({ comment, likeComment, deleteComment }) {
  return (
    <div className="comment-card">

      <h4>{comment.author}</h4>

      <p>{comment.message}</p>

      <div className="comment-actions">

        <button
          onClick={() => likeComment(comment._id)}
        >
          👍 {comment.likes}
        </button>

        <button
          onClick={() => deleteComment(comment._id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default CommentCard;