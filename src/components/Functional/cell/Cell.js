import React from 'react';
import "./cell.sass"
function Cell(props) {
    return (
            <div className="cell">
            <div className="connected"></div>
            <h1>{props.sku}</h1>
            <p>{props.defaultSku}</p>
            </div>
    );
}

export default Cell;