import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [response,setResponse] = useState("");

  const handlePost = () => {
    const data = {
      "name": name,
      "email": email,
      "file": file
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setResponse('Request Successful');
    })
    .catch(error => {
      console.error('Error:', error);
      setResponse('Request Not Successful');
    });
  }

  return (
    <>
      <h1>Hello there!</h1>
      <span>Name: </span>
      <input
        value={name}
        placeholder="Enter your name.."
        onChange={(e) => setName(e.target.value)} required
      ></input>
      <br />
      <br />
      <span>Email: </span>
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email.." required
      ></input>
      <br />
      <br />
      <span>File: </span>
      <input type="file" onChange={(e) => setFile(e.target.value)}></input>
      <br />
      <br />
      <button onClick={handlePost} type="submit">Post Request</button><br/><br/>
      <h4>{response}</h4>
    </>
  );
}

export default App;
