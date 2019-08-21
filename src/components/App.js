import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";
import ButtonFetchUsers from "./ButtonFetchUsers";
import ButtonRemoveUsers from "./ButtonRemoveUsers";
const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: []
  };
  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(dataresponse => {
        const user = dataresponse.results;

        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      .catch(error => console.log(error + " - Przyczyna błędu"));
  };
  handleRemoveUser = () => {
    this.setState({
      users: []
    });
  };

  render() {
    const users = this.state.users;
    return (
      <div className="conteiner">
        <ButtonRemoveUsers click={this.handleRemoveUser} />
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UserList users={users} /> : users}
      </div>
    );
  }
}

export default App;
