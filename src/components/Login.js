import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// import Loading from './Loading';

import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      name: '',
      loading: false,
      login: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.submitValidation());
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;

    this.setState({ loading: true }, async () => {
      await createUser({ name });
      this.setState({
        loading: false,
        login: true,
      });
    });
  }

submitValidation = () => {
  const { name } = this.state;
  const minSizeName = 2;

  const btnState = (name.length > minSizeName)
    ? this.setState({ disabled: false })
    : this.setState({ disabled: true });
  return btnState;
}

render() {
  const { disabled, name, loading, login } = this.state;

  return (
    <main>
      {loading ? <p>Carregando...</p> : (
        <section>
          <label htmlFor="name">
            Login:
            <input
              data-testid="login-name-input"
              id="name"
              name="name"
              onChange={ this.handleChange }
              placeholder="Type your name here..."
              type="text"
              value={ name }
            />
          </label>
          <button
            data-testid="login-submit-button"
            disabled={ disabled }
            name="btnName"
            onClick={ this.handleSubmit }
            type="submit"
          >
            Entrar
          </button>
        </section>
      )}
      { login === true && (
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
      )}
    </main>
  );
}
}

export default Login;
