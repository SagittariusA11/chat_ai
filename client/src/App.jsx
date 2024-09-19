import React, { useEffect, useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting))
      .catch((error) => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
