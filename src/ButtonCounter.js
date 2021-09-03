import WithCount from "./withCounter";

function ButtonCounter(props) {
    return (
        <button onClick={props.inc}>Button clicked {props.count} times</button>
    );
}

export default WithCount(ButtonCounter);

// export default function HOC() {
//     return <ButtonCounter />
// }
