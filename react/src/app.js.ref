import './App.css';
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';


// 1. Enclose App in BrowserRouter
// 2. Add Link components to act as links/anchors
// 3. Use Switch-Route combination to match the path

function App() {
  return (
    <>
      <h1>React Router Demo</h1>
      <nav>
        <ul>
          <li><Link to="/home"> Home </Link></li>
          <li><Link to="/profilelist"> Profile List </Link></li>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="/"> Slash </Link></li>
        </ul>
      </nav>

      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profilelist">
            <ProfileList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
              <p>At slash</p>
          </Route>
        </Switch>
      </div>

    </>
  );
}

function Home() {
  return (
    <div>Home Page</div>
  );
}

function ProfileList() {
  let { path } = useRouteMatch();
  return (
    <div>
      <ul>
        <li><Link to={`${path}/anurag`}> anurag </Link></li>
        <li><Link to={`${path}/diwakar`}> Diwakar </Link></li>
        <li><Link to={`${path}/anant`}> Anant </Link></li>
        <li><Link to={`${path}/aditya`}> Aditya </Link></li>
      </ul>
      <Switch>
      <Route path={`${path}/:username`}>
          <Profile />
        </Route>        
      </Switch>
    </div>
  );
}

function Profile() {
  let { username } = useParams();
  return (
    <>
      {username}'s Profile Page
    </>
  );
}

function About() {
  return (
    <div>About Page</div>
  );
}




// 1. Example: Show a user greeting based on whether user is logged in or not
// 2. Create a mailbox showing how many unread messages the user has?
// 3. Toggle a warning banner upon button click! (component returns null)
// 4. Delete a message from the mailbox by clicking delete button

// function App(props) {

//   const [dc, setDc] = useState(false);

//   return (
//     <>
//     <p>Hello</p>
//     <button onClick={e => setDc(true)}>Show</button>
//     <button onClick={e => setDc(false)}>Hide</button>
//     <Text display={dc} />
//     </>
//   )

// }

// function Text(props) {
//   if (props.display === false) {
//     return null;
//   }
//   return (
//     <p>I am text</p>
//   );
// }

// function App(props) {

//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // POST request using fetch inside useEffect React hook
//         setLoading(true);
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title: 'React Hooks POST Request Example' })
//         };
//         fetch('https://reqres.in/api/posts', requestOptions)
//             .then(response => response.json())
//             .then(setPost)
//             .then(setLoading(false));
//             // .then(data => setPostId(data.id));

//     // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);

//     return (
//       <>
//         {loading && <img className="github-avatar" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> }
//         {post !== null  &&
//         <div>
//           <p>{post.title}</p>
//           <p>{post.id}</p>
//           <p>{post.createdAt}</p>
//         </div>
//         }
//       </>
//     );

//   // const githubAPIUrl = 'https://api.github.com/users/'
//   // const [userName, setUserName] = useState('b');
//   // const [userData, setUserData] = useState({});
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(false);

//   // useEffect(() => {
//   //   setLoading(true);

//   //   console.log(userName);
//   //   fetch(githubAPIUrl + userName)
//   //     .then(data => {
//   //       if (data.status === 404) {
//   //         setError(true);
//   //       } else if (data.status === 200) {
//   //         setError(false);
//   //       }
//   //       return data.json()
//   //     })
//   //     .then(setUserData)
//   //     .then(e => setTimeout(() => setLoading(false), 1000));
//   // }, [userName]);

//   // return (
//   //   <div className="app">
//   //     {error && <p className="error">Person not found</p>}
//   //     <input className="input-username" value={userName} onChange={(e) => setUserName(e.target.value)} />
//   //     {loading && <img className="github-avatar" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> }
//   //     {!loading && <img className="github-avatar" src="https://www.ivtinternational.com/wp-content/uploads/2019/11/Screenshot-2019-11-27-at-11.22.41.png" /> }
//   //     <p>Public Repos by User: {userData.public_repos}</p>
//   //     <p>Public Gists by User: {userData.public_gists}</p>
//   //   </div>  
//   // );

// }



// function App(props) {
//   const [mailbox, setMailbox] = useState(['123', 'mail 2']); // [arg, function]
//   const [input, setInput] = useState("");

//   // component renders for first time
//   // useeffect is called  ue1
//   // componenet renders for 2nd time
//   // func returned by ue1 is called
//   // useeffect is called ue2
//   // comp renders for 3rd time
//   // func returned by ue2 is caleed
//   // useeffect is called ue3

//   useEffect(() => {
//     console.log('useffect called');
//     document.title = `You have ${mailbox.length} messages.`;
//   }, [mailbox]);

//   // useEffect(() => {
//     // document.title = `You have ${mailbox.length} messages.`;
//   // });

//   let sendMail = () => {
//     setMailbox([ ...mailbox, input ]);
//     setInput('');
//   }

//   return (
//     <>
//       <input value={input} onChange={e => setInput(e.target.value)} />
//       <button onClick={e => sendMail()}>Submit</button>
//       <ul>
//       { mailbox.map((mail, i) => <li key={i}>{mail}</li>) }
//       </ul>
//     </>
//   );
// }

// function App(props) {

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <button onClick={e => setCount(count + 1)} >Add</button>
//       <br />
//       <p>{count}</p>
//       <br />
//       <button onClick={e => setCount(count - 1)}>Subtract</button>
//     </>
//   );


// }


// class TempInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {temp: this.props.temp}
//     this.handleChange = this.handleChange.bind(this);
//   }
  
//   handleChange(e) {
//     this.setState({
//       temp: e.target.value  // 100
//     });
//     this.props.handlerFunc(this.props.type, e.target.value);
//   }
  
//   render() {
//     if (this.props.type !== 'c' && this.props.type !== 'f') {
//       return null;
//     }
//     if (this.props.type === 'c') {
//       var placeholder = "Enter celcius temperature";
//     } else if (this.props.type === 'f') {
//       var placeholder = "Enter fahrenheit temperature";
//     }
//     return (
//       <>
//         <p>Enter input in {this.props.type}</p>
//         <input placeholder={placeholder} value={this.props.temp} onChange={this.handleChange} />
//       </>
//     );
//   }
// }

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       lastInputType: 'c',
//       lastInputTemp: 0
//     }
//   }

//   cToF(celsius) {
//     var cTemp = celsius;
//     var cToFahr = cTemp * 9 / 5 + 32;
//     return cToFahr;
//   }

//   fToC(fahrenheit) {
//     var fTemp = fahrenheit;
//     var fToCel = (fTemp - 32) * 5 / 9;
//     return fToCel;
//   } 

//   handleCel = (type, temp) => {
//     console.log(type, temp);
//     this.setState({
//       lastInputType: type,  // 'c'
//       lastInputTemp: temp,  // 100
//     })
//   }

//   handleFah = (type, temp) => {
//     console.log(type, temp);
//     this.setState({
//       lastInputType: type,
//       lastInputTemp: temp
//     })
//   }

//   render() {
//     console.log('Rendering');
//     var celcius = this.state.lastInputType === 'c' ? this.state.lastInputTemp : this.fToC(this.state.lastInputTemp);  // 100
//     var fahren = this.state.lastInputType === 'f' ?  this.state.lastInputTemp : this.cToF(this.state.lastInputTemp);  // 212

//     return (
//       <>
//         <TempInput type='c' handlerFunc={this.handleCel} temp={celcius} /> 
//         <br />
//         <TempInput type='f' handlerFunc={this.handleFah} temp={fahren} />
//       </>
//     );
//   }


// }


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       inputName: "",
//       age: "",
//       desc: "",
//       vaccination: ""
//     }
//   }

//   handleInputName = (event) => {
//     this.setState({
//       inputName: event.target.value
//     });
//   }

//   handleInputAge = (event) => {
//     this.setState({
//       age: event.target.value
//     });
//   }

//   handleInputDesc = (event) => {
//     this.setState({
//       desc: event.target.value
//     });
//   }

//   handleInputVacc = (event) => {
//     this.setState({
//       vaccination: event.target.value
//     });
//   }

//   render() {
//     return (
//       <>
//         <input placeholder="Enter your name" value={this.state.inputName} onChange={this.handleInputName} />
//         <input placeholder="Enter your age" value={this.state.age} onChange={this.handleInputAge} />
//         <textarea placeholder="Enter your description" value={this.state.desc} onChange={this.handleInputDesc}></textarea>
//         <br /> Vaccination Status
//         <select value={this.state.vaccination} onChange={this.handleInputVacc}>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>
//         <p>Hello! My name is {this.state.inputName}. My age is {this.state.age}. {this.state.desc}
//         { this.state.vaccination === "Yes" && "I am vaccinated!" } 
//         { this.state.vaccination === "No" && "I will be vaccinated soon!" } 
//         </p>
//       </>
//     );
//   }

// }

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
