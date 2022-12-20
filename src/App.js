import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:"",
    email: "",
    comment: "",
    check: false
  });

  console.log(formData);

  function handleChange (event) {
    const {name, value, type, checked} = event.target;

    setFormData((prefFormData) => {
      var newFormData = {...prefFormData};
      newFormData[name] = type === "checkbox" ? checked : value;
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
        <textarea
          value={formData.comment}
          name="comment"
          placeholder="Comment"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={formData.check}
          name="check"
          id="check"
          class="d-inline"
          onChange={handleChange}
        />
        <label htmlFor="check">Check</label>
      </form>
    </div>
  );
}

export default App;
