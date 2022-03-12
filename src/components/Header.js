import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          { loading
            ? <p>Carregando...</p>
            : (
              <nav className="header-menu">
                <Link data-testid="link-to-favorites" to="/favorites">
                  Favorites
                </Link>
                <Link data-testid="link-to-profile" to="/profile">
                  Profile
                </Link>
                <Link data-testid="link-to-search" to="/search">
                  Search
                </Link>
                <p data-testid="header-user-name">
                  {userName}
                </p>
              </nav>
            )}
        </div>
      </header>
    );
  }
}

export default Header;
