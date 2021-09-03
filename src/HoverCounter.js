import withCount from "./withCounter";

function HoverCounter(props) {
    return (
        <button onMouseOver={props.inc}>Button hovered {props.count} times</button>
    );
}

export default withCount(HoverCounter);

