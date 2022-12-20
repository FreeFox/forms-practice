import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:"",
    email: "",
    comment: "",
    check: false,
    employment: "",
    color: ""
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
          className="d-inline"
          onChange={handleChange}
        />
        <label htmlFor="check">Check</label>
        <fieldset>
          <input
            type="radio"
            name="employment"
            value="full-time"
            id="full-time-employment"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
            />
          <label htmlFor="full-time-employment">Full-time</label>
          <br />
          <input
            type="radio"
            name="employment"
            value="part-time"
            id="part-time-employment"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
            />
          <label htmlFor="part-time-employment">Part-time</label>
          <br />
          <input
            type="radio"
            name="employment"
            value="unemployed"
            id="unemployed-employment"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
            />
          <label htmlFor="unemployed-employment">Unemployed</label>
        </fieldset>
        <select
          name="color"
          value={formData.color}
          onChange={handleChange}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </form>
    </div>
  );
}

export default App;
