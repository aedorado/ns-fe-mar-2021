import { useEffect, useState } from 'react';
import './App.css';

function getToken() {
  return localStorage.getItem('token');
}

function setToken(userToken) {
  return localStorage.setItem('token', userToken);
}

function Login({ setTokenState, setUser }) {

  const [email, setEmail] = useState('jm@wwe.com');
  const [password, setPassword] = useState('rockp');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let reqBody = { email, password };
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    }).then(data => data.json()).then(data => {
      setUser(data.user);
      setToken(data.token);
      setTokenState(data.token)
    });
  }

  return (
    <div>
      <h3>Please log in</h3>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email"></input>
        <input value={password} onChange={e => setPassword(e.target.value)} type="text" placeholder="passwordword"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function App() {

  const [tokenState, setTokenState] = useState(getToken());
  const [user, setUser] = useState({});

  if (!tokenState) {
    return <Login setTokenState={setTokenState} setUser={setUser}></Login>;
  }

  const handleLogout = (e) => {
    fetch('http://localhost:3000/logoutAll', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + tokenState
      }
    }).then(data => {
      setTokenState(undefined);
      localStorage.removeItem('token');
    });
  }

  return (
    <div className="App">
      <div>Welcome {user.name}  </div>
      <br />
      <TaskList token={tokenState} />
      <br /> 
      <button onClick={handleLogout}>LOGOUT All Sessions</button>
    </div>
  );
}

function TaskList({token}) {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/task/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(data => {
      const filTasks = tasks.filter(task => task._id !== id);
      setTasks(filTasks);
    });
  }

  useEffect(() => {
    fetch('http://localhost:3000/tasks', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(data => data.json()).then(data => setTasks(data));
  }, []);

  return (
    <div>
      <p>TaskList</p>
      { tasks.map(task => <TaskListItem task={task} key={task._id} deleteTask={deleteTask} />) }
    </div>
  );
}

function TaskListItem({task, deleteTask}) {

  return (
    <div className="task-list-item">
      {task.description} | {task.completed ? 'Completed' : 'Not Completed'}
      <br />
      <button onClick={e => { deleteTask(task._id) }}>DELETE TASK</button>
    </div>
  );
}

export default App;
