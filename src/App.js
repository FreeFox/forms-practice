import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({firstName:"", lastName:"", email: ""});

  console.log(formData);

  function handleChange (event) {
    setFormData((prefFormData) => {
      var newFormData = {...prefFormData};
      newFormData[event.target.name] = event.target.value;

      return newFormData;
    });
  }

  return (
    <div className="App">
      <form>
        <input 
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
