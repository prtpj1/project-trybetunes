import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.handleUser();
  }

  handleUser = () => {
    this.setState({ loading: true }, async () => {
      const user = await getUser();

      this.setState({
        loading: false,
        userName: user.name,
      });
    });
  }

  render() {
    const { userName, loading } = this.state;

    return (
      <header data-testid="header-component">
        Header
        <div>
          { loading
            ? <p>Carregando...</p>
            : (
              <p data-testid="header-user-name">
                {userName}
              </p>
            )}
        </div>
      </header>
    );
  }
}

export default Header;
