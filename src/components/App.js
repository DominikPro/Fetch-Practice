import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null
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
        // console.log(data);
        this.setState({
          users: dataresponse.results
        });
      })
      .catch(error => console.log(error + " - Przyczyna błędu"));
  };

  render() {
    const users = this.state.users;
    return (
      <div className="conteiner">
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UserList users={users} /> : users}
      </div>
    );
  }
}

export default App;
