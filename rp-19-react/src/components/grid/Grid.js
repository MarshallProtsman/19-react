import React from "react";
import "./gridstyle.css";

function Grid (photo) {
    return <div className = "grid" >{photo.children}</div>
}

export default Grid;