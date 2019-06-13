import React from 'react';

const userString = sessionStorage.getItem('currentUser');
const initalUser = userString ? JSON.parse(userString) : null;
const Context = React.createContext();

export class UserProvider extends React.Component {
  state = {
    currentUser: initalUser
  }

  onLogin = (currentUser) => {
    this.setState({ currentUser 
    });
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  onLogOut = (onLogOut) =>{
    this.setState({initalUser});
  }

  render(){
    return (
      <Context.Provider value={{
        user: this.state.currentUser,
        onLogin: this.onLogin
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
