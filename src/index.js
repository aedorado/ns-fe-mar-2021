import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let msgList = ['Hi Bro', 'How are you', 'Enjoying learning react?', 'Woo hoo'];
// let msgList = [];

ReactDOM.render(
  <>
    <App msgList={msgList}></App>
  </>,
  document.getElementById('root')
);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// let name = 'React JS !';
// function gn() {
//   return name;
// }

// ReactDOM.render(
//   // React.createElement(
//   //   'p', 
//   //   { className: 'li-class', style: {color: 'blue', fontSize: '24px'} }, 
//   //   React.createElement(
//   //     'ul',
//   //     null, 
//   //     React.createElement('li', null, "React"),
//   //     React.createElement('li', null, "Angular"),
//   //     React.createElement('li', {style:{color:'yellow'}}, "Vue"),
//   //     React.createElement('li', null, "Express"),
//   //   )
//   // ),
//   // <App />,
//   <p className="li-class" style={{color: 'blue', fontSize: '24px'}}>
//     <ul>
//       <li>{ gn() }</li>
//       <li>Angular</li>
//       <li style={{color:'yellow'}}>Vue</li>
//       <li>Express</li>
//     </ul>
//   </p>,
//   document.getElementById('root')
// );
