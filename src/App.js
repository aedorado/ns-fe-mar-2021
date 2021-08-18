import './App.css';
import React from 'react';

// 1. Example: Show a user greeting based on whether user is logged in or not
// 2. Create a mailbox showing how many unread messages the user has?
// 3. Toggle a warning banner upon button click! (component returns null)
// 4. Delete a message from the mailbox by clicking delete button

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      age: "",
      desc: "",
      vaccination: ""
    }
  }

  handleInputName = (event) => {
    this.setState({
      inputName: event.target.value
    });
  }

  handleInputAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  handleInputDesc = (event) => {
    this.setState({
      desc: event.target.value
    });
  }

  handleInputVacc = (event) => {
    this.setState({
      vaccination: event.target.value
    });
  }

  render() {
    return (
      <>
        <input placeholder="Enter your name" value={this.state.inputName} onChange={this.handleInputName} />
        <input placeholder="Enter your age" value={this.state.age} onChange={this.handleInputAge} />
        <textarea placeholder="Enter your description" value={this.state.desc} onChange={this.handleInputDesc}></textarea>
        <br /> Vaccination Status
        <select value={this.state.vaccination} onChange={this.handleInputVacc}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p>Hello! My name is {this.state.inputName}. My age is {this.state.age}. {this.state.desc}
        { this.state.vaccination === "Yes" && "I am vaccinated!" } 
        { this.state.vaccination === "No" && "I will be vaccinated soon!" } 
        </p>
      </>
    );
  }

}

// function ListItem(props) {
//   console.log(props);

//   return (
//     <>
//       <li>{props.msg.text}</li>
//       <span onClick={ () => props.deleteFunc(props.msg.id) }>Delete Message</span>
//     </>
//   )
// }

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       msgList: this.props.msgList
//     }
//   }

//   deleteMessage = (id) => {
//     console.log(id);
//     this.setState((state) => ({
//       msgList: state.msgList.filter(msg => msg.id !== id)
//     }));
//   }

//   render() {
//     return (
//       <>
//       <ul>
//         {
//           this.state.msgList.map((msg, i) => <ListItem key={msg.id} msg={msg} deleteFunc={this.deleteMessage} />)
//         }
//       </ul>
//       {/* <button onClick={this.deleteMessage}>Delete first message</button> */}
//       </>
//     );
//   }
// }

// const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );

// function WelcomeLoggedOut(prop) {
//   return (
//     <div>
//       Welcome unknown user to our site
//     </div>
//   );
// }

// function WelcomeLoggedinUser(prop) {
//   return (
//     <div>
//       Welcome {prop.userName} to our website
//     </div>
//   );
// }

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isUserLoggedIn: false
//     }
//   }

//   loginLogoutUser = () => {
//     this.setState((state) => ({
//       isUserLoggedIn: !state.isUserLoggedIn
//     }));
//   }

//   render() {
//     let name = "Ichhwak";

//     if (this.state.isUserLoggedIn) {
//       var userMessage = <WelcomeLoggedinUser userName={name} />
//     } else {
//       var userMessage = <WelcomeLoggedOut />
//     }

//     return (
//       <div>
//         {userMessage}
//         <br />
//         <button onClick={this.loginLogoutUser}>{ this.state.isUserLoggedIn ? 'Logout' : 'Login' }</button>
//       </div>

//     )
//   }

// }

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//     // this.inc = this.inc.bind(this);
//     // this.dec = this.dec.bind(this);
//   }

//   inc = (event) => {
//     console.log(event);
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   dec() {
//     this.setState((state) => ({
//       count: state.count - 1
//     }));
//   }


//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <button onClick={this.inc}>Add</button>
//         <br />
//         <p>{this.state.count}</p>
//         <br />
//         <button onClick={this.dec}>Subtract</button>

//       </div>
//     )
//   }

// }

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {count: 0}
//   }

//   inc = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   dec = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.inc}> + </button>
//         <span className="count-display">Count {this.state.count}</span>
//         <button onClick={this.dec}> - </button>
//       </>
//     )
//   }

// }

// function App(props) {
//   return (
//     <div className="App">
//         <p>This para uses props: {props.name}</p>
//         <p>Age: {props.age}</p>
//       </div>
//   );
// }

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     console.log(props);
//   }

//   render() {
//     return (
//       <div className="App">
//         <p>This para uses props: {this.props.name}</p>
//         <p>Age: {this.props.age}</p>
//       </div>
//     );    
//   }
  
// }



  // // f1 -> f2

  // // this.props.increment = 5
  // // this.state.counter = 10

  // // 10 - f1 - 15 - f2 - 20
  // // 10 - f1, f2 - 20

  // f1() {
  //   this.setState({
  //     counter: this.state.counter + this.props.increment,
  //   });
  //   // this.setState({ counter: 10 + 5 })
  // }

  // f2() {
  //   this.setState({
  //     counter: this.state.counter + this.props.increment,
  //   });
  //   // this.setState({ counter: 10 + 5 })
  // }

export default App;
