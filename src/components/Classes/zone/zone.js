import React, {Component} from 'react';
import "./zone.sass"
import CellParent from "../cellParent/cellParent";
class Zone extends Component {
    mainCells=this.props.cells.filter(cell=>cell.joinedWith===null)
     sortedCells = this.mainCells.map(aria => {
        const itemsInThisCell = this.props.cells.filter(item => item.joinedWith === aria.id);
        return { ...aria, items: itemsInThisCell };
    });
     sortedWithEmptyItemsAtEnd=[
        ...this.sortedCells.filter(cell => cell.items.length > 0),
        ...this.sortedCells.filter(cell => cell.items.length === 0)
    ]
     cells=this.sortedWithEmptyItemsAtEnd.map(cell =>(<CellParent sku={cell.sku} defaultSku={cell.defaultSku} joinedWith={cell.joinedWith} childrens={cell.items} status={cell.status} key={cell.id}/>))

    render(){
        return (
            <div className="zone">
                <h1>{this.props.name}</h1>
                <div className="cell-div">
                    {this.cells}
                </div>

            </div>
        );
    }

}

export default Zone;