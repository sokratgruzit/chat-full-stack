import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState('');
  
  useEffect(() => {
    fetch("/api/hello")
    .then(res => res.json())
    .then(data => setMsg(data.message));
  }, []);

  return <p>{msg}</p>
}

export default App
