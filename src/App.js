import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login(e) {
    e.preventDefault();
    if (username === 'DANS' && password === '123') {
      setIsLoggedIn(true)
      setErrorLogin('')
    } else {
      setErrorLogin('username dan password salah') 
    }
  }

  function LoginPage() {
    return (
      <section>
        <Form onSubmit={login}>
          {errorLogin && (<Alert color="danger">   
            {errorLogin}
          </Alert>)}
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Username</Label>
            <Input type="text" name="username" id="exampleEmail" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </section>
    )
  }

  return (
    <div className="App">
      {!isLoggedIn ? <LoginPage /> : null}
    </div>
  );
}

export default App;