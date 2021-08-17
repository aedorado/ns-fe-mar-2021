import './App.css';
import React from 'react';

// 1. Example: Show a user greeting based on whether user is logged in or not
// 2. Create a mailbox showing how many unread messages the user has?
// 3. Toggle a warning banner upon button click! (component returns null)

function App(props) {
  console.log(props);
  console.log(props.msgList.length === 0)
  
  return (
    <>
      <h1>This is my mail.</h1>
      { (props.msgList.length === 0) && <p>You have no messages</p>}
      { (props.msgList.length > 0) && <p>You have { props.msgList.length } messages</p>}
    </>
  );
}



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
