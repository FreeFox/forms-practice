import './App.css';
import React from 'react';

function App() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  function handleChange (event) {
    event.target.name === 'first_name' ? setFirstName(event.target.value) : setLastName(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <form>
        <input type="text" name="first_name" placeholder='First name' onChange={handleChange} />
        <input type="text" name="last_name" placeholder='Last name' onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
