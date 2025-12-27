import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div className="p-4">
      <p className="font-bold text-3xl">{msg}</p>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
