import React, { Component } from 'react'
import User from './User';

class Users extends Component {
    state ={
       users: [
           {name: "Zara", age:15, grade: "A"},
           {name: "Zata", age:45, grade: "B"},
           {name: "Bobo", age:65, grade: "A"},
           {name: "Tuli", age:75, grade: "C"},
           {name: "Cathy", age:85, grade: "D"},
           {name: "Milly", age:55, grade: "B"},
           {name: "Kate", age:48, grade: "A"},
        ],
        title: "List of the users",
        dates: new Date().getFullYear()
    }

    makeYounger =() =>{
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age -=10;
            tempUser.name = (tempUser.name).toUpperCase();

            return tempUser;
        });
        this.setState({
            newState
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.makeYounger}>Make users younger</button>
                <br/>
                <h1>{this.state.title}</h1>
                <h1>{this.state.dates}</h1>
                {
                    this.state.users.map((user)=>{
                    return <User age={user.age}>{user.name} {user.grade}</User>
                    })
                }
            </div>
        )
    }
}
export default Users;