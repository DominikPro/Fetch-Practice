import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";
import ButtonFetchUsers from "./ButtonFetchUsers";
import ButtonRemoveUsers from "./ButtonRemoveUsers";
import ButtonSortUsers from "./ButtonSortUsers";
const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: [],
    sorting: true
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
          users: prevState.users.concat(user),
          sorting: true
        }));
      })
      .catch(error => console.log(error + " - Przyczyna błędu"));
  };
  handleRemoveUser = () => {
    this.setState({
      users: [],
      sorting: true
    });
  };
  handleUserSort = () => {
    const usersSort = this.state.users.reverse();
    this.setState({
      sorting: !this.state.sorting,
      user: usersSort
    });
  };

  render() {
    const users = this.state.users;
    return (
      <div className="conteiner">
        <ButtonRemoveUsers click={this.handleRemoveUser} />
        <ButtonFetchUsers click={this.handleDataFetch} />
        <ButtonSortUsers
          click={this.handleUserSort}
          sorting={this.state.sorting}
        />

        {users.length > 0 ? <UserList users={users} /> : users}
      </div>
    );
  }
}

export default App;
