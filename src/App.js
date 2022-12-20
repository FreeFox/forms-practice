import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    newsletter: false
  });

  function handleChange (event) {
    const {name, value, type, checked} = event.target;

    setFormData((prefFormData) => {
      var newFormData = {...prefFormData};
      newFormData[name] = type === "checkbox" ? checked : value;
      return newFormData;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password !== formData.confirm_password) {
      console.log("Passwords to not match");
      return;
    } else {
      console.log("Successfully signed up");
    }

    if (formData.newsletter) {
      console.log("Thanks for signing up to our newsletter!");
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={formData.check}
          name="newsletter"
          id="newsletter"
          className="d-inline"
          onChange={handleChange}
        />
        <label htmlFor="newsletter">I want to join the newsletter</label>
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default App;
