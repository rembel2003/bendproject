import React from 'react';
import "./zone.sass"
import CellParent from "../cellParent/cellParent";
function Zone(props) {
    const mainCells=props.cells.filter(cell=>cell.joinedWith===null)
    const sortedCells = mainCells.map(aria => {
        const itemsInThisCell = props.cells.filter(item => item.joinedWith === aria.id);
        return { ...aria, items: itemsInThisCell };
    });
    const sortedWithEmptyItemsAtEnd=[
        ...sortedCells.filter(cell => cell.items.length > 0),
        ...sortedCells.filter(cell => cell.items.length === 0)
    ]
    const cells=sortedWithEmptyItemsAtEnd.map(cell =>(<CellParent sku={cell.sku} defaultSku={cell.defaultSku} joinedWith={cell.joinedWith} childrens={cell.items} status={cell.status} key={cell.id}/>))
    return (
        <div className="zone">
            <h1>{props.name}</h1>
            <div className="cell-div">
                {cells}
            </div>

        </div>
    );
}

export default Zone;