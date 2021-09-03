import withCount from "./withCounter";

function ParaCounter(props) {
    return (
        <p onClick={props.inc}>Paragraph clicked {props.count} times</p>
    );
}

export default withCount(ParaCounter);
