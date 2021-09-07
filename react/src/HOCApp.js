import { useState } from "react";
import ButtonCounter from "./ButtonCounter";
import HoverCounter from "./HoverCounter";
import ParaCounter from "./ParaCounter";


export default function HOCApp() {
    return (
        <>
            <ButtonCounter></ButtonCounter>
            <ParaCounter></ParaCounter>
            <HoverCounter></HoverCounter>
        </>
    );
}