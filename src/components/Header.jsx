import React from 'react';
import logo from "../assets/logo-app.png";
import '../styles/header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {propData: props.data};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleSubmit(event.target.value);
  }

  render() {
    return (
      <div className="container-header">
        <div className="container-logo">
          <img src={logo} className="logo-header" />
        </div>

        <div className="container-search">
          <div className="align-search">
            {
              this.state.propData == 0 && (
                <div>
                  <span className="place">Santa Cruz, Bolivia</span>
                  
                    <input id="inputText" className="in-buscar" placeholder="Buscar" type="search" onChange={this.handleChange}></input>                
                </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header