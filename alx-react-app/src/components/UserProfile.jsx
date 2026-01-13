// src/components/UserProfile.jsx

const UserProfile = (props) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.age}>Age: {props.age}</p>
      <p style={styles.bio}>Bio: {props.bio}</p>
    </div>
  );
};

// Optional: Add some basic styling
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    maxWidth: '300px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  name: {
    color: '#333',
    marginBottom: '10px',
  },
  age: {
    color: '#666',
    fontSize: '16px',
    marginBottom: '10px',
  },
  bio: {
    color: '#444',
    fontSize: '14px',
    lineHeight: '1.5',
  }
};

export default UserProfile;