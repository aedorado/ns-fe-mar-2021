import React, { useState } from "react";

// let withCount = (WrapperedComponent) => {
//   return class extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0
//       };
//     }

//     inc = () => {
//       this.setState((state) => ({
//         count: state.count + 1
//       }));
//     };

//     render() {
//       return <WrapperedComponent count={this.state.count} inc={this.inc} />;
//     }
//   };
// };

let withCount = (WrappedComponent) => {

    return function HOC() {

        const [count, setCount] = useState(0);

        let inc = () => {
            setCount(count + 10);
        }

        return (<WrappedComponent count={count} inc={inc} />);
    }

};

export default withCount;
