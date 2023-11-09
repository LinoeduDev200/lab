import React from 'react';
import './App.css';

function App() {
 return (
    <div className="App">
      <div className="login-container">
        <div className="login-content">
          <h2>Login</h2>
          <form>
            <label>Email:</label>
            <input type="email" name="email" required />

            <label>Password:</label>
            <input type="password" name="password" required />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
 );
}

export default App;