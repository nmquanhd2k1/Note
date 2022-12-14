
import { useState } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  const [personName, setPersonName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [city, setCity] = useState('')

  const addToList = () => {
    Axios.post("http://localhost:3003/insert", {
      personName: personName,
      email: email,
      mobile: mobile,
      city: city
    });
  }
  return (
    <div className="App">
      <h1> CRUD App with MERN</h1>

      <label>Name</label>
      <input type="text"
        onChange={(event) => {
          setPersonName(event.target.value);
        }} />

      <label>Email</label>
      <input type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }} />

      <label>Mobile</label>
      <input type="text"
        onChange={(event) => {
          setMobile(event.target.value);
        }} />

      <label>City</label>
      <input type="text"
        onChange={(event) => {
          setCity(event.target.value);
        }} />

      <button onClick={addToList}>Add to List</button>

    </div>
  );
}

export default App;
