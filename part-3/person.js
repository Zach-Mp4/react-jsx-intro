const Person = ({ name, age, hobbies }) => {
    // Truncate the name if it's longer than 8 characters
    const truncatedName = name.length > 8 ? name.substring(0, 6) + '...' : name;
  
    return (
      <div>
        <p>Learn some information about {truncatedName}</p>
        <h3>{age >= 18 ? 'Please go vote!' : 'You must be 18'}</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };
  