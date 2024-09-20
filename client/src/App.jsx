import React, { useEffect, useState } from 'react';
import { getHello } from './api';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const data = await getHello();
        setGreeting(data.greeting);
      } catch (error) {
        setGreeting('Failed to fetch greeting.');
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
