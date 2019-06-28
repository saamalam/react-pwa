import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenuBar(e) {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className=" navbar-item"><strong>News API PWA</strong></Link>
              <button
                type="button"
                onClick={e => this.toggleMenuBar(e)}
                className={`navbar-burger ${open ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
              <Link className="navbar-item" to="/home" onClick={() => this.closeMenuBar()}>
                Home
              </Link>
              <Link className="navbar-item" to="/business" onClick={() => this.closeMenuBar()}>
                Business
              </Link>
              <Link className="navbar-item" to="/entertainment" onClick={() => this.closeMenuBar()}>
                Entertainment
              </Link>
              <Link className="navbar-item" to="/science" onClick={() => this.closeMenuBar()}>
                Science
              </Link>
              <Link className="navbar-item" to="/technology" onClick={() => this.closeMenuBar()}>
                Technology
              </Link>
              <Link className="navbar-item" to="/sports" onClick={() => this.closeMenuBar()}>
                Sports
              </Link>
              <Link className="navbar-item" to="/login" onClick={() => this.closeMenuBar()}>
                Login
              </Link>             
            
            </div>
          </div>
        </nav>
        <section className="hero is-medium is-info is-bold">
       <div className="hero-body">
         <div className="container">
          <h1 className="title">
            News API - News all over
          </h1>
         <h2 className="subtitle">
           You can find All news including Headline
         </h2>
       </div>
      </div>
     </section>
      </div>
    );
  }
}
