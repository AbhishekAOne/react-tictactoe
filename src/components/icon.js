import React from "react";
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa"
const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle className={"icon"} color='green'/>
            break;
        case 'cross':
            return <FaTimes className="icon" color="red"/>
        default:
            return <FaPen className="icon" color="black"/>
            break;
    }
}

export default Icon;
