import React from 'react';
import Cell from "../cell/Cell";
import "../cell/cell.sass"
import "./cellParent.sass"
function CellParent(props) {
    const childrenCell =props.childrens.map(cell=>(<Cell sku={cell.sku} defaultSku={cell.defaultSku} joinedWith={cell.joinedWith} key={cell.id}/>))
    const colorGenerator=(childrenArray)=>{
        if(childrenArray.every(child=>child.status==="open") && props.status==="open")
            return "open"
        if(childrenArray.every(child=>child.status==="closed")  && props.status==="closed")
            return "closed"
        else
            return "partially-closed"
    }
    return (
        <div>
            <div className="cell-parent">
                <div className="cell">
                    <div className={colorGenerator(props.childrens)}></div>
                    <h1>{props.sku}</h1>
                    <p>{props.defaultSku}</p>
                </div>
                <div className="child-div">
                    {childrenCell}
                </div>

            </div>
        </div>
    );
}

export default CellParent;