const Tweet = ({ username, date, message }) => {
    return (
      <div className="tweet">
        <b>Tweet</b>
        <h3>{username}</h3>
        <h4>{date}</h4>
        <p>{message}</p>
      </div>
    );
  };